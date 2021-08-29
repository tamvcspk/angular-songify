import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '@angular-songify/api-interfaces';

const ENDPOINT = "/api/songs";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }
  all() {
    return this.http.get<Song[]>(ENDPOINT);
  }
  find(id: string) {
    return this.http.get<Song>(`${ENDPOINT}/${id}`);
  }
  create(song: Song) {
    return this.http.post<Song[]>(ENDPOINT, song);
  }
  update(song: Song) {
    return this.http.patch<Song[]>(`${ENDPOINT}/${song.id}`, song);
  }
  delete(song: Song) {
    return this.http.delete<Song[]>(`${ENDPOINT}/${song.id}`);
  }
}
