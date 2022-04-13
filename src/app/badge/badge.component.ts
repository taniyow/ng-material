import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor() { }

  ngOnInit(): void {
  }

  html = `
  <p>
    <span matBadge="4" matBadgeOverlap="false">Text with a badge</span>
  </p>

  <p>
      <span matBadge="1" matBadgeSize="large">Text with large badge</span>
  </p>

  <p>
    Button with a badge on the left
    <button mat-raised-button color="primary"
        matBadge="8" matBadgePosition="before" matBadgeColor="accent">
      Action
    </button>
  </p>

  <p>
      Button toggles badge visibility
      <button mat-raised-button matBadge="7" [matBadgeHidden]="hidden" (click)="toggleBadgeVisibility()">
          Hide
      </button>
  </p>

  <p>
    Icon with a badge
    <mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>
      <!-- Include text description of the icon's meaning for screen-readers -->
      <span class="cdk-visually-hidden">
        Example with a home icon with overlaid badge showing the number 15
      </span>
  </p>
  `;

  ts = `
  import {Component} from '@angular/core';

  /**
   * @title Badge overview
   */
  @Component({
    selector: 'badge-overview-example',
    templateUrl: 'badge-overview-example.html',
  })
  export class BadgeOverviewExample {
    hidden = false;
  
    toggleBadgeVisibility() {
      this.hidden = !this.hidden;
    }
  }  
  `;

}
