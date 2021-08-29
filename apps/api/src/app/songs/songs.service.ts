import { Song } from '@angular-songify/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class SongsService {

  songs: Song[] = [
    {
      "id": "1",
      "title": "Song1",
      "description": "This is Song 1"
    },
    {
      "id": "2",
      "title": "Song2",
      "description": "This is Song 2"
    },
    {
      "id": "3",
      "title": "Song3",
      "description": "This is Song 3"
    }
  ]
  create(song: Song) {
    this.songs = [...this.songs, Object.assign({}, song, { id: v4() })]
    return this.songs;
  }

  findAll() {
    return this.songs;
  }

  findOne(id: string) {
    return this.songs.find(song => song.id === id);
  }

  update(id: string, song: Song) {
    this.songs = this.songs.map(s => s.id === id ? song : s);
    return this.songs;
  }

  remove(id: string) {
    this.songs = this.songs.filter(song => song.id !== id);
    return this.songs;
  }
}
