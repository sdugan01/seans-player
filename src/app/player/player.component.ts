import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { Songs } from '../mock-songs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  songs = Songs;

  selectedSong: Song;

  constructor() { }

  ngOnInit(): void {
  }


  onSelect(song: Song): void {
    this.selectedSong = song;
  }

}
