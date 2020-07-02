import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-like-component',
  templateUrl: './like.component.html',
  styleUrls: ['../app.component.css']
})

export class LikeComponent implements OnInit{
  count = 0;
  likeDisabled = false;

  constructor() { }

  ngOnInit(): void { }

  likeButton(): void {
    this.count++;
    if (this.count === 100) {
      this.likeDisabled = true;
    }
  }

}
