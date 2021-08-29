import { Song } from '@angular-songify/api-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'angular-songify-songs-details',
  templateUrl: './songs-details.component.html',
  styleUrls: ['./songs-details.component.scss']
})
export class SongsDetailsComponent implements OnInit {

  currentSong: Song;
  songTitle = '';

  @Input() set song(value: Song) {
    if (value) {
      this.songTitle = value.title;
    }
    this.currentSong = { ...value };
  }

  @Output() saved = new EventEmitter();
  @Output() cancel = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
