import {Component, View} from 'angular2/angular2';

import {RdWidget} from 'components/rd-widget/rd-widget';
import {RdWidgetHeader} from 'components/rd-widget-header/rd-widget-header';
import {RdWidgetBody} from 'components/rd-widget-body/rd-widget-body';

import {CountryListService} from '../../services/country_list';
import {JumperListService} from '../../services/jumper_list';

import {CollectionListView} from '../collection-list-view/collection-list-view';


@Component({
  selector: 'dashboard',
  bindings: [CountryListService, JumperListService]
})
@View({
  templateUrl: './components/dashboard/dashboard.html',
  styleUrls: ['./components/dashboard/dashboard.css'],
  directives: [RdWidget, RdWidgetHeader, RdWidgetBody, CollectionListView]
})
export class Dashboard {

  countries:any[];
  jumpers:any[];

  constructor(private _countryService: CountryListService, private _jumperService: JumperListService) {
    this.countries = _countryService.all();
    this.jumpers = _jumperService.all();
  }
}
