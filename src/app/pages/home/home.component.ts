import { Component, OnInit } from '@angular/core';
import { Properties } from 'src/app/config/properties';
import { DataadapterService } from 'src/app/services/dataadapter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Array<any> = [];
  stats: Array<any> = [{
    count: 345,
    text: 'Total Orders'
  }, {
    count: 267,
    text: 'Total Expenses'
  },{
    count: 345,
    text: 'Total Revenue'
  },{
    count: 345,
    text: 'New Users'
  }];
  
  constructor(private dataAdapter: DataadapterService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.dataAdapter.fetchData(Properties.Instance.blogsURL).subscribe(
      (data: any[]) => {
        this.posts = data;
      }
    );
  }
}
