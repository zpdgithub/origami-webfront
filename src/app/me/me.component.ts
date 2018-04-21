import {
  NgModule,
  Component,
  OnInit
} from '@angular/core';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { MeListComponent } from '../me-list/me-list.component';
import { MessagesComponent } from '../messages/messages.component';
import { FavoritesComponent } from '../favorites/favorites.component';

export const routes: Routes = [
  { path: '', redirectTo: 'meList', pathMatch: 'full' },
  { path: 'meList', component: MeListComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'favorites', component: FavoritesComponent }
];
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
@NgModule({
  declarations: [
    MeComponent,
    MeListComponent,
    MessagesComponent,
    FavoritesComponent
  ],
  exports: [
    MeComponent,
    MeListComponent,
    MessagesComponent,
    FavoritesComponent
  ],
  imports: [RouterModule]
})
export class MeComponentModule { }

