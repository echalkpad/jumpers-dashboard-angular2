import {Component, View,CORE_DIRECTIVES} from 'angular2/angular2';
import {CollectionItemComponent} from './collection-item';

@Component({
  selector: 'collection-list-view',
  properties: ['model']
})
@View({
  template: `<ul class="list-unstyled">
      <li *ng-for="#item of model" class="row">
          <collection-item [item]="item"></collection-item>
      </li>
  </ul>`,
  directives: [CORE_DIRECTIVES, CollectionItemComponent]
})
export class CollectionListView {

  model:any[];

  constructor() {
    this.model = [];
  }
}
