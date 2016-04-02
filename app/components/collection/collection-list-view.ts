import {Component, View,CORE_DIRECTIVES} from 'angular2/angular2';
import {CollectionItemComponent} from './collection-item';
import {CollectionHeaderComponent} from './collection-header'

@Component({
  selector: 'collection-list-view',
  properties: ['model']
})
@View({
  template: `
  <div class="table-responsive">
  <table class="table table-bordered">
    <thead>
        <th class="bg-primary" *ng-for="#headerItem of header">{{headerItem}}</th>
        <th class="bg-primary">Actions</th>
    </thead>
    <tbody>
        <tr *ng-for="#row of model">
            <td *ng-for="#item of items(row);">{{row[item]}}</td>
            <td><button (click)="edit()">Edit</button></td>
        </tr>
      </tbody>
  </table>
  </div>
`,
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
  items(row) : Array<string> {
    return Object.keys(row);
  }
  edit() {
      console.log('test');
  }
}
