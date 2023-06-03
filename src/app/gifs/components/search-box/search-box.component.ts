import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

 @ViewChild('textTag') 
 public tagInput!: ElementRef<HTMLInputElement>

 @Output() searchTagOput = new EventEmitter<string>()

 constructor(private gifsService: GifsService){}

  public searchTag(): void{
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = ''
  }
}
