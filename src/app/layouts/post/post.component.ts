import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../shared/services/categories.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postData;
  comments: any;
  show: boolean = false;
  constructor(private postService: CategoriesService) { }

  ngOnInit(): void {
    this.postService.getPost().subscribe(data => {
      this.postData= data.data;
      console.log(this.postData);
    });
  }
  getComments(id){
    this.postService.getComments(id).subscribe(data => {
      console.log(data);
      this.comments = data.data;
    });
    // this.show =!this.show;
  }
}
