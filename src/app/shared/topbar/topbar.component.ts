import { Component, OnInit } from '@angular/core';
import {CounterApiService} from '../../service/counter-api.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.less']
})
export class TopbarComponent implements OnInit {

  constructor(private counterApiService: CounterApiService) { }

  ngOnInit() {
    this.counterApiService.setCount();
  }
}
