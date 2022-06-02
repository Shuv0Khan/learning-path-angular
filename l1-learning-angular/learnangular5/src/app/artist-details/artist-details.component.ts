import {Component, Input, OnInit} from '@angular/core';
import {Artist} from "../app.component";

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  @Input() artist: Partial<Artist>;
  constructor() {
    this.artist = {
      bio: ''
    }
  }

  ngOnInit(): void {
  }

}
