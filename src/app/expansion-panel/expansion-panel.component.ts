import { Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  panelOpenState = false;

  html1 = `
  <mat-accordion>
    <mat-expansion-panel hideToggle>
      <mat-expansion-panel-header>
        <mat-panel-title>
          This is the expansion title
        </mat-panel-title>
        <mat-panel-description>
          This is a summary of the content
        </mat-panel-description>
      </mat-expansion-panel-header>
      <p>This is the primary content of the panel.</p>
    </mat-expansion-panel>
    <mat-expansion-panel (opened)="panelOpenState = true"
                        (closed)="panelOpenState = false">
      <mat-expansion-panel-header>
        <mat-panel-title>
          Self aware panel
        </mat-panel-title>
        <mat-panel-description>
          Currently I am {{panelOpenState ? 'open' : 'closed'}}
        </mat-panel-description>
      </mat-expansion-panel-header>
      <p>I'm visible because I am open</p>
    </mat-expansion-panel>
  </mat-accordion>
  `;
  css1 = `
  .mat-form-field + .mat-form-field {
    margin-left: 8px;
  }
  `;
  ts1 = `
  import {Component} from '@angular/core';

  /**
   * @title Basic expansion panel
   */
  @Component({
    selector: 'expansion-overview-example',
    templateUrl: 'expansion-overview-example.html',
    styleUrls: ['expansion-overview-example.css'],
  })
  export class ExpansionOverviewExample {
    panelOpenState = false;
  }
  `;
}
