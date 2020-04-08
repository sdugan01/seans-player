import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { Songs } from '../mock-songs';
import { SongService } from '../song.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  songs: Song[];

  selectedSong: Song;

  constructor(private songService: SongService, private messageService: MessagesService) {}

  getSongs(): void {
    this.songService.getSongs().subscribe((songs) => this.songs = songs);
  }

  ngOnInit(): void {
    this.getSongs();
  }


  onSelect(song: Song): void {
    this.selectedSong = song;
    this.messageService.add(`SongService: Selected song id=${song.id}`);
  }

}
