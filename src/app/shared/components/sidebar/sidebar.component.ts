import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private _gifsService: GifsService) {}

  get getTags(): string[] {
    return this._gifsService.tagsHistory;
  }

  public clickTags(tag: string): void {
    return this._gifsService.searchTag(tag);
  }
}
