import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dislike-component',
  templateUrl: './dislike.component.html',
  styleUrls: ['../app.component.css']
})

export class DislikeComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit(): void { }

  dislikeButton = () => {
    this.count--;
  }
}
