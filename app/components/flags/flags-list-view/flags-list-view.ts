import {Component, View,CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'flags-list-view',
  properties: ['model']
})
@View({
  templateUrl: './components/flags/flags-list-view/flags-list-view.html',
  directives: [CORE_DIRECTIVES]
})
export class FlagsListView {

  model:any[];

  constructor() {
    this.model = [];
  }
}
