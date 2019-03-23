import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    private lang = 'en';

    constructor(translate: TranslateService) {
        translate.setDefaultLang(this.lang);
        translate.use(this.lang);
    }

    ngOnInit(): void { }
}
