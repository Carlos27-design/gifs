import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar Gift"
      (keyup.enter)="searchTag()"
      #txtTagInput
    />`,
})
export class SearchBoxComponent implements OnInit {
  constructor(private _gifsService: GifsService) {}

  ngOnInit() {}

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  public searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this._gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
