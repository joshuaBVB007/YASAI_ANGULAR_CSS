import { Component, OnInit } from '@angular/core';
import { MatomoTracker } from '@ngx-matomo/tracker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title='Natural life';
  constructor(private tracker: MatomoTracker){
  }  
  ngOnInit(): void {
    this.tracker.setUserId('Jonathan Ascencio');
    this.tracker.trackEvent('category', 'action', 'name', 3);
  }
}


