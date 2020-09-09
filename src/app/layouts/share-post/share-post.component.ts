import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-share-post',
  templateUrl: './share-post.component.html',
  styleUrls: ['./share-post.component.scss']
})
export class SharePostComponent implements OnInit {
  @Input() postData;
  @Input() comments;
  constructor() { }

  ngOnInit(): void {
  }

}
