import {Injectable} from '@angular/core';
import {Track} from '../entity/track';
import {HttpClient} from '@angular/common/http';
import {config} from '../../config';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CounterApiService {
    count: number;

    constructor(private http: HttpClient) { }

    postTrack(track: Track): void {
        const url = config.counterApiUrl + 'tracks';
        const params = {
            'trackId': track.id,
            'name': track.name
        };

        this.http.post<any>(url, params)
            .subscribe(() => ++this.count);
    }

    setCount(): void {
        const url = config.counterApiUrl + 'tracks';

        this.http.get<any>(url).pipe(
            map(result => {
                return result['hydra:totalItems'];
            })
        ).subscribe(count => this.count = count);
    }
}
