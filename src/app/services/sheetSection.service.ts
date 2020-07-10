import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class SheetSectionService {
    private sectionName: BehaviorSubject<string> = new BehaviorSubject("");
    getSectionName = this.sectionName.asObservable();
    setSectionName(_sectionName:string){
        this.sectionName.next(_sectionName);
    }

}