import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {RdLoading} from 'components/rd-loading/rd-loading';
import {RdWidget} from 'components/rd-widget/rd-widget';

import {RdWidgetHeader} from 'components/rd-widget-header/rd-widget-header';
import {RdWidgetBody} from 'components/rd-widget-body/../rd-widget-body/rd-widget-body';

import {CollectionListView} from '../collection/collection-list-view';
import {JumperListService} from '../../services/jumper_list';

@Component({
  selector: 'jumpers',
  bindings: [JumperListService]
})
@View({
  templateUrl: './components/jumpers/jumpers.html',
  directives: [CORE_DIRECTIVES, RdWidget, RdWidgetHeader, RdWidgetBody, RdLoading, CollectionListView]
})
export class Jumpers {
  jumpers:any[];

  constructor(public jumpersService: JumperListService) {
    /* TODO: get items from collection service */
  }
}
