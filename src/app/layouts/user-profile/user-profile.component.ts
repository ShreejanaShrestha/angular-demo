import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../shared/services/categories.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  fullProfile;
  userId;
  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
    console.log(this.userId);
    this.getUserProfile();
  }
  getUserProfile(): void{
    this.categoriesService.getFullUser(this.userId).subscribe(data => {
      console.log(data);
      this.fullProfile = data;
      console.log(this.fullProfile.picture, this.fullProfile.location.city)

    });
  }
}
