import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  query: string;
  artists: Artist[];
  currentArtist: Artist | undefined;

  constructor(private httpClient: HttpClient) {
    this.query = "";
    this.artists = []
    this.currentArtist = undefined;
  }

  ngOnInit(): void {
    this.httpClient.get<Artist[]>('../assets/data.json')
      .subscribe(data => {
        this.artists = data;
      });
  }

  showArtist(artist: Artist) {
    this.query = artist.name
    this.artists.forEach(elem => {
      if (elem === artist) {
        elem.highlight = true;
        this.currentArtist = elem;
      }
      else {
        elem.highlight = false;
      }
    })
  }
}

export interface Artist {
  name: string;
  shortname: string;
  reknown: string;
  bio: string;
  highlight: boolean
};
