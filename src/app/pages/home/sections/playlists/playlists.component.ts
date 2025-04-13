import { Component } from '@angular/core';
import { GridComponent } from "../../../../components/grid/grid.component";
import { PlaylistItem, PlaylistItemWithMultipleImages } from '@shared/interfaces/playlist.interface';

@Component({
  selector: 'app-playlists',
  imports: [GridComponent],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss'
})
export class PlaylistsComponent {

  itemsPlaylist: PlaylistItem[] = [
    {
      id: 1,
      title: "Desenvolvimento HTML3 + CSS3 + JS",
      image: [
        {
          id: 1,
          path: "icon-html5.svg",
          alt: "Imagem de um icone de html5"
        },
        {
          id: 2,
          path: "icon-css.svg",
          alt: "Imagem de um icone de css3"
        },
        {
          id: 3,
          path: "icon-js.svg",
          alt: "Imagem de um icone de javascript"
        }
      ]
    },
    {
      id: 2,
      title: "Desenvolvimento React JS",
      image: "icon-react-xs.svg",
      alt: "Imagem de um icone de react"
    },
    {
      id: 3,
      title: "O mundo da Tecnologia",
      image: "icon-wordpress.svg",
      alt: "Imagem de um icone de wordpress"
    }
  ]
  isMultipleImages(item: PlaylistItem): item is PlaylistItemWithMultipleImages {
    return Array.isArray(item.image);
  }
}
