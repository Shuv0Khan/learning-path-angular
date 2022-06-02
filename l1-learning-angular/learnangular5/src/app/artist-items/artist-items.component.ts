import {Component, Input, OnInit} from '@angular/core';
import {Artist} from "../app.component";

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  styleUrls: ['./artist-items.component.css']
})
export class ArtistItemsComponent implements OnInit {
  @Input() artist: Artist;
  constructor() {
    this.artist = {
      name: '',
      shortname: '',
      bio: '',
      reknown: '',
      highlight: false
    }
  }

  ngOnInit(): void {
  }

}
