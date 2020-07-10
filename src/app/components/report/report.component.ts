import { Component, OnInit } from '@angular/core';
import { Report } from '../../models/report/report';
import { ReportService } from '../../service/report/report.service';
import { Section } from 'src/app/models/report/section';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  //contiene toda la información del reporte
  report: Report;


  constructor(private reportService: ReportService) { }
  ngOnInit(): void {
    this.reportService.get(0).subscribe(data => {

      data.sections['report-header'] = new Section(false);
      data.sections['page-header'] = new Section(true);
      data.sections['detail'] = new Section(true);
      data.sections['page-footer'] = new Section(true);
      data.sections['report-footer'] = new Section(false);

      this.report = data;
    });
  }

}
