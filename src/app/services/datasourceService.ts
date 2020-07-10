import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class DatasourceService {
    private dataSources: BehaviorSubject<any> = new BehaviorSubject({});
    getDataSources = this.dataSources.asObservable();
    setDataSources(_dataSources:any){
        this.dataSources.next(_dataSources);
    }
    
    constructor(private http: HttpClient) { }
    syncDatasource(params:any):Observable<any>{
        return this.http.post(`${environment.getUrl('/report/datasource/connect')}`, params);
    }
    save(params:any):Observable<any>{
        return this.http.post(`${environment.getUrl('/report/datasource/save')}`, params);
    }
}