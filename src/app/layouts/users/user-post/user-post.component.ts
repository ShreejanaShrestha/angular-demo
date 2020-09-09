import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../_services/auth.service';
import {CategoriesService} from '../../../shared/services/categories.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {
  userId;
  postData;
  constructor(private userPostService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
    this.userPostService.getAllPosts(this.userId).subscribe(data => {
      this.postData = data;
      console.log(data);
    });
  }

}
