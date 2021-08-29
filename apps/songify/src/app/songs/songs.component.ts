import { Component, OnInit } from '@angular/core';
import { Song } from '@angular-songify/api-interfaces';
import { SongService } from '@angular-songify/core-data';
import { Observable } from 'rxjs';

const emptySong: Song = {
  id: null,
  title: '',
  description: ''
};

@Component({
  selector: 'angular-songify-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
  providers: [SongService]
})
export class SongsComponent implements OnInit {

  songs$: Observable<Song[]>;
  selectedSong: Song;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songs$ = this.songService.all();
    this.selectedSong = emptySong;
  }

  selectSong($event: Song) {
    this.selectedSong = $event;
  }

  deleteSong($event: Song) {
    this.songs$ = this.songService.delete($event);
    this.selectedSong = emptySong;
  }

  saveSong($event: Song) {
    if ($event.id) {
      this.updateSong($event);
    } else {
      this.createSong($event);
    }
  }

  updateSong(song: Song) {
    this.songs$ = this.songService.update(song);
    this.resetSongDetails();
  }

  createSong(song: Song) {
    this.songs$ = this.songService.create(song);
    this.resetSongDetails();
  }

  resetSongDetails() {
    this.selectedSong = emptySong;
  }

}
