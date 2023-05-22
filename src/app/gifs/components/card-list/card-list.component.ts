import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interface/gifs.interface';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  constructor(private _gifsService: GifsService) {}

  @Input()
  public gifs: Gif[] = [];

  get Gifs(): Gif[] {
    return this._gifsService.gifList;
  }
}
