import { Component } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private _gifsService: GifsService) {}

  get Gifs(): Gif[] {
    return this._gifsService.gifList;
  }
}
