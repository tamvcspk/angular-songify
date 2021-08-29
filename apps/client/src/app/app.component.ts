import { Song } from '@angular-songify/api-interfaces';
import { SongService } from '@angular-songify/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-songify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SongService]
})
export class AppComponent implements OnInit {
  title = 'client';
  songs$: Observable<Song[]>;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songs$ = this.songService.all();
  }
}
