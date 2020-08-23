import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public userData

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getPost().subscribe(data => {
      this.userData = data
      console.log(this.userData, '=============')
})
  }

}
