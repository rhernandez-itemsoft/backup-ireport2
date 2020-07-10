import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class SheetOptionsService {
    private options: BehaviorSubject<any> = new BehaviorSubject({});
    getOptions = this.options.asObservable();

    setOptions(_options:any){
        this.options.next(_options);
    }

}