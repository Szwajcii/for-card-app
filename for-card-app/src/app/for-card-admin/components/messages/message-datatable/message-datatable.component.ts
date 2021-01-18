import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-message-datatable',
  templateUrl: './message-datatable.component.html',
  styleUrls: ['./message-datatable.component.scss']
})
export class MessageDatatableComponent implements OnInit, AfterViewInit {

  public datasource = new MatTableDataSource([]);

  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Input() displayedColumns: Array<string>;
  expandedElement: null;

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
