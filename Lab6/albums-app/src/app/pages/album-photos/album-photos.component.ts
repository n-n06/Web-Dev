import { Component, inject } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Photo } from '../../models/album/photo.model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  albumService: AlbumsService = inject(AlbumsService);
  albumPhotos!: Photo[];
  route: ActivatedRoute = inject(ActivatedRoute);
  id!: number;

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getPhotos(this.id).subscribe(res => {
      this.albumPhotos = res;
    });
  }


}
