import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'jumper-list-view',
  properties: ['model']
})
@View({
  templateUrl: './components/jumpers/jumper-list-view/jumper-list-view.html',
  directives: [CORE_DIRECTIVES]
})
export class JumperListView {

  model:any[];

  constructor() {
    this.model = [];
  }
}
