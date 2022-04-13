import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  html = `
  <mat-card>
    <mat-card-title>Actions Buttons</mat-card-title>
    <mat-card-subtitle>Start</mat-card-subtitle>
    <mat-card-actions>
      <button mat-button>LIKE</button>
      <button mat-button>SHARE</button>
    </mat-card-actions>
  </mat-card>
  <br>
  <mat-card>
    <mat-card-title>Actions Buttons</mat-card-title>
    <mat-card-subtitle>End</mat-card-subtitle>
    <mat-card-actions align="end">
      <button mat-button>Like</button>
      <button mat-button>SHARE</button>
    </mat-card-actions>
  </mat-card>
  `;

  ts = `
    import {Component} from '@angular/core';

    /**
     * @title Card with actions alignment option
     */
    @Component({
      selector: 'card-actions-example',
      templateUrl: 'card-actions-example.html',
    })
    export class CardActionsExample {}
  `;

  html2 = `
  <mat-card class="example-card">
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-content>
      <p>This card has divider and indeterminate progress as footer</p>
      <p>{{ longText }}</p>
    </mat-card-content>
    <mat-divider inset></mat-divider>
    <mat-card-actions>
      <button mat-button>LIKE</button>
      <button mat-button>SHARE</button>
    </mat-card-actions>
    <mat-card-footer>
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </mat-card-footer>
  </mat-card>
  `;

  css2 = `
  .example-card {
    max-width: 400px;
  }
  `;

  html3 = `
  <mat-card class="example-card">
    <mat-card-header>
      <div mat-card-avatar class="example-header-image"></div>
      <mat-card-title>Shiba Inu</mat-card-title>
      <mat-card-subtitle>Dog Breed</mat-card-subtitle>
    </mat-card-header>
    <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
    <mat-card-content>
      <p>
        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.
      </p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-button>LIKE</button>
      <button mat-button>SHARE</button>
    </mat-card-actions>
  </mat-card>
  `;

  css3 = `
  .example-card {
    max-width: 400px;
  }
  
  .example-header-image {
    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
    background-size: cover;
  }
  `;

  html4 = `
  <!-- Cards with media area -->
  <mat-card class="example-card">
    <mat-card-title-group>
      <mat-card-title>Shiba Inu</mat-card-title>
      <mat-card-subtitle>Small</mat-card-subtitle>
      <img mat-card-sm-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" >
    </mat-card-title-group>
    <mat-card-content>
      {{longText}}
    </mat-card-content>
  </mat-card>

  <mat-card class="example-card">
    <mat-card-title-group>
      <mat-card-title>Shiba Inu</mat-card-title>
      <mat-card-subtitle>Medium</mat-card-subtitle>
      <img mat-card-md-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" >
    </mat-card-title-group>
    <mat-card-content>
      {{longText}}
    </mat-card-content>
  </mat-card>

  <mat-card class="example-card">
    <mat-card-title-group>
      <mat-card-title>Shiba Inu</mat-card-title>
      <mat-card-subtitle>Large</mat-card-subtitle>
      <img mat-card-lg-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" >
    </mat-card-title-group>
    <mat-card-content>
      {{longText}}
    </mat-card-content>
  </mat-card>

  <mat-card class="example-card">
    <mat-card-title-group>
      <mat-card-title>Shiba Inu</mat-card-title>
      <mat-card-subtitle>Extra large</mat-card-subtitle>
      <img mat-card-xl-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" >
    </mat-card-title-group>
    <mat-card-content>
      {{longText}}
    </mat-card-content>
  </mat-card>
  `;

  css4 = `
  .example-card {
    max-width: 400px;
    margin-bottom: 8px;
  }  
  `;
}
