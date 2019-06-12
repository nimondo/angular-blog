import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blogTitle: string;
  @Input() blogContent: string;
  @Input() blogCreateAt: string;
  @Input() blogLoveIt;
  constructor() { }

  ngOnInit() {
  }
  onLoveIt(){
	return this.blogLoveIt++;
  }
  onDontLoveIt(){
	return this.blogLoveIt--;
  }

}
