import { Component, OnInit } from '@angular/core';
import { Properties } from '../../config/properties';
import { DataadapterService } from 'src/app/services/dataadapter.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isListView: Boolean = false;
  users: Array<any> = [];
  dtOptions: DataTables.Settings = {};
  constructor(private dataAdapter: DataadapterService) { }

  ngOnInit(): void {
    this.getUsers();    
  }


  getUsers() {
    this.dataAdapter.fetchData(Properties.Instance.usersURL).subscribe(
      (data: any[]) => {
        this.users = data;
      }
    );
  }

  toggleDisplayView() {
    this.isListView = !this.isListView;
  }
}
