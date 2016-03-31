import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'collection-item',
    properties: ['item']
})
@View({
  template: `<span class="col-xs-6">{{item.name}}</span>
  <span class="col-xs-4">{{item.jumps}}</span>
  <span class="col-xs-2"><button class="btn btn-default btn-sm">Edit</button></span>
  `
})
export class CollectionItemComponent{
    item:any[];

    constructor() {
      this.item = [];
    }
}
