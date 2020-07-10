import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMatModule } from './app-mat.module';

import { AngularSplitModule } from 'angular-split';
import { ColorPickerModule } from 'ngx-color-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutLoguedComponent } from './components/layout-logued/layout-logued.component';
import { ReportComponent } from './components/report/report.component';
import { LeftRulerComponent } from './components/report/left-ruler/left-ruler.component';
import { TopRulerComponent } from './components/report/top-ruler/top-ruler.component';
import { SectionComponent } from './old/components/section/section.component';
import { LeftSideComponent } from './components/layout-logued/left-side/left-side.component';
import { InputComponent } from './components/report/controls/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutLoguedComponent,
    ReportComponent,
    LeftRulerComponent,
    TopRulerComponent,
    LeftSideComponent,
    SectionComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularSplitModule.forRoot(),
    ColorPickerModule,
  
    AppRoutingModule, 
    BrowserAnimationsModule,
    AppMatModule
  ],
  providers: [
   
  ],
  exports:[
    LeftSideComponent,
    InputComponent
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
