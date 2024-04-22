import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dateSeries } from './dataSerie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  avg: number;

  constructor(private serieService: SerieService) { 
    this.avg = 0;
  }
  getSeriesList() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.avg = this.calculateAvg(series);
    });
  }
  calculateAvg(serie: Serie[]): number {
    let totalSeasons = 0;
    serie.forEach(function(item){
      totalSeasons += item.seasons
    }
    )
    return totalSeasons / serie.length;
  }

  ngOnInit() {
    this.getSeriesList();

  }

}
