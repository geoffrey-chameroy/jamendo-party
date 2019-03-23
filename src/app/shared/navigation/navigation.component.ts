import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
    }

    onChangeLang(lang: string) {
        this.translate.use(lang);
    }
}
