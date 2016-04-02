import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'collection-header',
    properties: ['header']
})
@View({
  template: `
  <th>{{header}}</th>
  `
})
export class CollectionHeaderComponent{
    header:any[];

    constructor() {
      this.header = [];
    }
    onInit() {
    }
}
