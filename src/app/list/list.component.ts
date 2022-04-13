import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  html = `
  <mat-list>
    <div mat-subheader>Folders</div>
    <mat-list-item *ngFor="let folder of folders">
      <mat-icon mat-list-icon>folder</mat-icon>
      <div mat-line>{{folder.name}}</div>
      <div mat-line> {{folder.updated | date}} </div>
    </mat-list-item>
    <mat-divider></mat-divider>
    <div mat-subheader>Notes</div>
    <mat-list-item *ngFor="let note of notes">
      <mat-icon mat-list-icon>note</mat-icon>
      <div mat-line>{{note.name}}</div>
      <div mat-line> {{note.updated | date}} </div>
    </mat-list-item>
  </mat-list>
  `;

  ts = `
  import {Component} from '@angular/core';

  export interface Section {
    name: string;
    updated: Date;
  }

  /**
   * @title List with sections
   */
  @Component({
    selector: 'list-sections-example',
    styleUrls: ['list-sections-example.css'],
    templateUrl: 'list-sections-example.html',
  })
  export class ListSectionsExample {
    folders: Section[] = [
      {
        name: 'Photos',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Recipes',
        updated: new Date('1/17/16'),
      },
      {
        name: 'Work',
        updated: new Date('1/28/16'),
      },
    ];
    notes: Section[] = [
      {
        name: 'Vacation Itinerary',
        updated: new Date('2/20/16'),
      },
      {
        name: 'Kitchen Remodel',
        updated: new Date('1/18/16'),
      },
    ];
  }
  `;
}
