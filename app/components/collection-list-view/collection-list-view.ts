import {Component, View,CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'collection-list-view',
  properties: ['model']
})
@View({
  templateUrl: './components/collection-list-view/collection-list-view.html',
  directives: [CORE_DIRECTIVES]
})
export class CollectionListView {

  model:any[];

  constructor() {
    this.model = [];
  }
}
