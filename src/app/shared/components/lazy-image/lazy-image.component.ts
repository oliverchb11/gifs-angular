import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent {

  @Input({required: true}) public url!: string 
  @Input({required: true}) public title: string =''
  public hasLoaded: boolean = false;


  public onLoad(): void{
   setTimeout(() => {
    this.hasLoaded = true;
   }, 1000);
  }
}
