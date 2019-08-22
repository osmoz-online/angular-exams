import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paper-menu',
  templateUrl: './paper-menu.component.html',
  styleUrls: ['./paper-menu.component.css']
})
export class PaperMenuComponent implements OnInit {

  routes: Route[];

  constructor(private _router: Router) { }

  ngOnInit() {
    this.routes = this._router.config.filter(route => route.data.show);
  }

}
