import { ComponentFactoryResolver,  ApplicationRef, ComponentRef, EmbeddedViewRef, Injector, Type, } from '@angular/core';

export class HtmlContainer {
  private attached: boolean = false;

  private disposeFn: () => void;

  constructor(
    private hostElement: Element,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) {
  }


  attach(component: Type<any>): ComponentRef<any> {
    if (this.attached) {
      throw new Error('component has already been attached')
    }

    this.attached = true;
    const childComponentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    let componentRef = childComponentFactory.create(this.injector);

    this.appRef.attachView(componentRef.hostView);
    this.disposeFn = () => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    };

    let newChild = (componentRef.hostView as EmbeddedViewRef<any>);
    if (newChild.rootNodes && newChild.rootNodes.length > 0) {
      this.hostElement.appendChild(newChild.rootNodes[0]);

      return componentRef;
    } else {
      return null;
    }
  }

  dispose() {
    if (this.attached) {
      this.disposeFn();
    }
  }
}