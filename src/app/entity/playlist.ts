import {Track} from './track';

export class Playlist {
    id: string;
    name: string;
    creationdate: string;
    user_id: string;
    user_name: string;
    zip: string;
    shorturl: string;
    shareurl: string;
    tracks: Track[];
}
