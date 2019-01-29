import { Component, OnInit } from '@angular/core';
import { BottomSheetMenu } from './BottomSheet/bottomsheet.component'
import { MatBottomSheet } from '@angular/material';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private bottomSheet: MatBottomSheet, private router: Router, private activatedRoute: ActivatedRoute, private title: Title, private meta: Meta) {}
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetMenu);
  }
  updateTitle(title: string) {
    this.title.setTitle(title + ' - SD Solar Energy');
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }
  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        console.log(event['description']);
        this.updateTitle(event['title']);
        this.updateDescription(event['description'])
      });
  }
}
