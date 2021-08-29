import { Component, Input, OnInit, Output } from '@angular/core';
import { Song } from '@angular-songify/api-interfaces';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'angular-songify-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  @Input() songs: Song[] = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
