import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users-datatable',
  templateUrl: './users-datatable.component.html',
  styleUrls: ['./users-datatable.component.scss']
})
export class UsersDatatableComponent implements OnInit {

  public datasource = new MatTableDataSource([]);

  @Input() displayedColumns: Array<string>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
