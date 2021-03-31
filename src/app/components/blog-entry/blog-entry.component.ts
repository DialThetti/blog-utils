import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'blrr-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BlogEntryComponent implements OnInit {
  @Input() title!: string;
  @Input() author!: string;
  @Input() date!: string;
  @Input() tags!: string;

  expanded = false;
  constructor() {}

  ngOnInit(): void {}

  get tagList(): string[] {
    return this.tags.split(',').map((tag) => tag.trim()).sort();
  }

  get expandText(): string {
    return this.expanded ? 'Show less' : 'Show more';
  }
}
