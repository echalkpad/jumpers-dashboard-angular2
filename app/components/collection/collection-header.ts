import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'collection-header',
    properties: ['header']
})
@View({
  template: `
  <div>{{header}}</div>
  `
})
export class CollectionHeaderComponent{
    header:any[];

    constructor() {
      this.header = [];
      console.log('TEst');
    }
    onInit() {
        console.log(this.header);
    }
}
