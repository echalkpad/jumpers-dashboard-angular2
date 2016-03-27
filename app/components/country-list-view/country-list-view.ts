import {Component, View,CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'country-list-view',
  properties: ['model']
})
@View({
  templateUrl: './components/country-list-view/country-list-view.html',
  directives: [CORE_DIRECTIVES]
})
export class CountryListView {

  model:any[];

  constructor() {
    this.model = [];
  }
}
