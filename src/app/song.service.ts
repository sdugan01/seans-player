import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { Song } from './song';
import { Songs } from './mock-songs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  getSongs(): Observable<Song[]> {
    this.messageService.add('SongService: fetched songs');
    return of(Songs);
  }
  constructor(private messageService: MessagesService) { }
}
