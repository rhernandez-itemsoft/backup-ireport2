import { Injectable } from '@angular/core';
import { Report } from '../../models/report/report';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';


/**
 * Obtiene, Guarda, y Borra un reporte
 */
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private storage: LocalStorage) { }

  //carga el reporte
  get(id: number): Observable<Report> {
    return <Observable<Report>> this.storage.getItem('report');
  }

  //guarda la información del reporte
  save(report: Report): Observable<boolean> {
    return this.storage.setItem('report', report);
  }

  //borra la información del reporte
  delete(id: number) {

  }
}
