import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {PaymentCardDetailsComponent} from '../payment-card-details/payment-card-details.component';
import {PaymentCard} from '../../../../for-card-shared/model/payment-card.model';
import {DIALOG_WIDTH} from '../../../../for-card-shared/utils/basic-properties';

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

  constructor(
    private dialog: MatDialog
  ) {
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

  openCardDetails(paymentCard: PaymentCard.Model) {
    this.dialog.open(PaymentCardDetailsComponent, {
      width: DIALOG_WIDTH,
      data: paymentCard
    });
  }

}
