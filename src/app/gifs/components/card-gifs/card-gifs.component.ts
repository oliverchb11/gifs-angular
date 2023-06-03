import { Component, Input } from '@angular/core';
import { Gif } from '../../services/interfaces/response-gifs-api';

@Component({
  selector: 'card-gifs',
  templateUrl: './card-gifs.component.html',
  styleUrls: ['./card-gifs.component.css']
})
export class CardGifsComponent {
   @Input({required: true}) gif!: Gif;
}
