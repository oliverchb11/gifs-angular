import { Component, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../services/interfaces/response-gifs-api';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public gifsService = inject(GifsService);

  constructor(){
  }

  get gifs(): Gif[]{
    return this.gifsService.gifsData
  }
}
