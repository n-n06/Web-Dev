import { Photo } from "./photo.model";

export interface AlbumDetailed {
    id: number,
    userId: number,
    username: string,
    title: string,
    images: Photo[]
}