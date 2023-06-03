import { Component,  OnInit,  inject } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  private gifsService = inject(GifsService)
  public gifsLocal: string[] = [];


  get tagsHistoryComp(){
    return this.gifsService.tagsHistory;
  }

  public tagName(tag: string): void{
    this.gifsService.searchTag(tag);
  }


}
