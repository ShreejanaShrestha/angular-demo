import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../shared/services/categories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private categoriesService: CategoriesService,
              private router: Router,
              ) { }
userData;
  fullProfile;

  ngOnInit(): void {

    this.categoriesService.getUser().subscribe(data => {
      this.userData = data.data;
      console.log(this.userData);
    });
  }

  getFullProfile = (id: any): void => {
    console.log(id);
    this.router.navigateByUrl(`/user/${id}`);
  }
  editUserInfo(id){
    this.router.navigateByUrl(`/user_info_update/${id}`);

  }
}
