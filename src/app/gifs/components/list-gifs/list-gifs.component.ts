import { Component, inject, OnInit, OnDestroy, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Subscription } from "rxjs";
import { Gif } from '../../services/interfaces/response-gifs-api';
@Component({
  selector: 'card-list-gifs',
  templateUrl: './list-gifs.component.html',
  styleUrls: ['./list-gifs.component.css']
})
export class ListGifsComponent {



constructor(){

}

@Input({required: true}) listGifs: Gif[] = [];



}
