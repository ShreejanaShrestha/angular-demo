import { Component, OnInit } from '@angular/core';
import {SpinnerService} from '../../services/spinner.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  loading:boolean;
  private loaderSubscriber: Subscription;

  constructor(private loaderService: SpinnerService) {
    this.loaderSubscriber = this.loaderService.isLoading.subscribe(v => {
      console.log(v);
      this.loading = v;
    });
  }

  ngOnInit(): void {
  }

}
