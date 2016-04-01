import {Component, View,CORE_DIRECTIVES} from 'angular2/angular2';
import {CollectionItemComponent} from './collection-item';
import {CollectionHeaderComponent} from './collection-header'

@Component({
  selector: 'collection-list-view',
  properties: ['model']
})
@View({
  template: `
<collection-header [header]="header"></collection-header>

<ul class="list-unstyled">
      <li *ng-for="#item of model" class="row">
          <collection-item [item]="item"></collection-item>
      </li>
  </ul>`,
  directives: [CORE_DIRECTIVES, CollectionItemComponent, CollectionHeaderComponent]
})
export class CollectionListView {

  model:any[];
  header:any[];

  constructor() {
    this.model = [];
  }
  onInit() {
      this.header = Object.keys(this.model[0]);

  }
}
