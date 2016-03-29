import {Component, View, bootstrap,CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
// import {HTTP_BINDINGS} from 'http/http';

import {Dashboard} from './components/dashboard/dashboard';
import {Tables} from './components/tables/tables';
import {Jumpers} from './components/jumpers/jumpers';
import {Flags} from './components/flags/flags';

@Component({
  selector: 'app'
})
@RouteConfig([
  {path: '/', component: Dashboard, as: 'dashboard'},
  {path: '/tables', component: Tables, as: 'tables'},
  {path: '/jumpers', component: Jumpers, as: 'jumpers'},
  {path: '/flags', component: Flags, as: 'flags'}
])
@View({
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
class App {

  mobileView:number = 992;
  toggle:boolean = false;

  constructor() {
    this.attachEvents();
  }

  attachEvents() {
    window.onresize = ()=> {
      if (this.getWidth() >= this.mobileView) {
        if (localStorage.getItem('toggle')) {
          this.toggle = !localStorage.getItem('toggle') ? false : true;
        } else {
          this.toggle = true;
        }
      } else {
        this.toggle = false;
      }
    }
  }

  getWidth() {
    return window.innerWidth;
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
    localStorage.setItem('toggle', this.toggle.toString());
  }
}

bootstrap(App, [ROUTER_BINDINGS]);
