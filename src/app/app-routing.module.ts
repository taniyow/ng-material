import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgeComponent } from './badge/badge.component';
import { CardsComponent } from './cards/cards.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ListComponent } from './list/list.component';

// Routes
const routes: Routes = [
  { path: '', component: BadgeComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'button', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
