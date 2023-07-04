import { Component } from '@angular/core';
import { tableHeadAndBodyModel } from '../../models/table-head-and-body.model';

@Component({
  selector: 'app-consumer-register-table',
  templateUrl: './consumer-register-table.component.html',
  styleUrls: ['./consumer-register-table.component.scss']
})
export class ConsumerRegisterTableComponent {
  public tableHeadAndBody: tableHeadAndBodyModel = {
    head: ['id', 'Consumidor', 'CNPJ', 'Status', 'Ações'],
    body: [
      ['0', 'Honda', '12312124/0000', 'OK', 'teste'],
      ['1', 'Ford', '12312124/0000', 'OK', 'teste'],
      ['2', 'Toyota', '12312124/0000', 'OK', 'teste'],
      ['3', 'Ferrari', '12312124/0000', 'OK', 'teste'],
      ['4', 'João', '12312124/0000', 'OK', 'teste'],
      ['5', 'José', '12312124/0000', 'OK', 'teste'],
      ['6', 'Maria', '12312124/0000', 'OK', 'teste']
    ]
  };
}
