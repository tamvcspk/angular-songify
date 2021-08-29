import { Song } from '@angular-songify/api-interfaces';
import { SongService } from '@angular-songify/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-songify-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SongService]
})
export class HomeComponent implements OnInit {

  songs$: Observable<Song[]>;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songs$ = this.songService.all();
  }

}
