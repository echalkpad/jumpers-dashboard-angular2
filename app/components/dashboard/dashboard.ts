import {Component, View} from 'angular2/angular2';

import {RdWidget} from 'components/rd-widget/rd-widget';
import {RdWidgetHeader} from 'components/rd-widget-header/rd-widget-header';
import {RdWidgetBody} from 'components/rd-widget-body/rd-widget-body';

import {CountryListService} from '../../services/country_list';
import {JumperListService} from '../../services/jumper_list';
import {FlagsListService} from '../../services/flags_list';

import {CollectionListView} from '../collection/collection-list-view';


@Component({
  selector: 'dashboard',
  bindings: [CountryListService, JumperListService, FlagsListService]
})
@View({
  templateUrl: './components/dashboard/dashboard.html',
  styleUrls: ['./components/dashboard/dashboard.css'],
  directives: [RdWidget, RdWidgetHeader, RdWidgetBody, CollectionListView]
})
export class Dashboard {

  countries:any[];
  jumpers:any[];
  flags:any[];

  constructor(
      private _countryService: CountryListService,
      private _jumperService: JumperListService,
      private _flagsListService: FlagsListService
  ) {
    this.countries = _countryService.all();
    this.jumpers = _jumperService.all();
    this.flags = _flagsListService.all();
  }
}
