import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-payment-cards-datatable',
  templateUrl: './payment-cards-datatable.component.html',
  styleUrls: ['./payment-cards-datatable.component.scss']
})
export class PaymentCardsDatatableComponent implements OnInit, AfterViewInit {

  public datasource = new MatTableDataSource([]);

  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Input() displayedColumns: Array<string>;
  @Input() set data(data: any[]) {
    this.setDatasource(data);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  setDatasource(data: any[]) {
    this.datasource = new MatTableDataSource<any>(data);
    this.datasource.data = data;
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
}
