import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  @Input()
  columns: any = [];
  
  @Input()
  data: any = [];
  dtOptions: DataTables.Settings = {};

  constructor() { 
  }

  ngOnInit(): void {

  }
}
