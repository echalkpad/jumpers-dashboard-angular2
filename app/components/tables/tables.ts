import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {RdLoading} from '../rd-loading/rd-loading';
import {RdWidget} from '../rd-widget/rd-widget';

import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from '../rd-widget-footer/rd-widget-footer';

import {CountryListService} from '../../services/country_list';

import {CollectionListView} from '../collection/collection-list-view';

@Component({
  selector: 'tables',
  bindings: [CountryListService]
})
@View({
  templateUrl: './components/tables/tables.html',
  directives: [CORE_DIRECTIVES, RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading, CollectionListView]
})
export class Tables {
  countries:any[];

  constructor(private _countryService: CountryListService) {
    this.countries = _countryService.all();
  }
}
