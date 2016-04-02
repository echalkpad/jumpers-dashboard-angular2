import {Component, View} from 'angular2/angular2';

@Component({
    selector: '[collection-row]',
    properties: ['row']
})
@View({
  template: `<td *ng-for="#item of row">{{item}}</td>
  <td class="col-xs-6">{{item.name}}</td>
    <td class="col-xs-4">{{item.jumps}}</td>
    <td class="col-xs-2"><button class="btn btn-default btn-sm">Edit</button></td>
    `
})
export class CollectionItemComponent{
    row:any[];

    constructor() {
      this.row = [];
    }
}
