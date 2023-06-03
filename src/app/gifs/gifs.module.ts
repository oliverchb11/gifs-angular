import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListGifsComponent } from './components/list-gifs/list-gifs.component';
import { CardGifsComponent } from './components/card-gifs/card-gifs.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ListGifsComponent,
    CardGifsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomePageComponent]
})
export class GifsModule { }
