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
  // Dynamically defined column, if any new column to be 
  // displayed in table then just new column object defination should be added
  columns: Array<any> = [{
    label: "ID", // this is to displaye table column heading
    id: 'id' // this is to map the datafied with table column
  },{
    label: "Name",
    id: 'name'
  },{
    label: "Email",
    id: 'email'
  },{
    label: "Website",
    id: 'website'
  }]
 
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
