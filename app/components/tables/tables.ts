import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {RdLoading} from 'components/rd-loading/rd-loading';
import {RdWidget} from 'components/rd-widget/rd-widget';

import {RdWidgetHeader} from 'components/rd-widget-header/rd-widget-header';
import {RdWidgetBody} from 'components/rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from 'components/rd-widget-footer/rd-widget-footer';

import {CountryListView} from 'components/country-list-view/country-list-view';
import {CountryListService} from 'services/country_list';


@Component({
  selector: 'tables',
  appInjector: [CountryListService]
})
@View({
  templateUrl: './components/tables/tables.html',
  directives: [CORE_DIRECTIVES, RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading, CountryListView]
})
export class Tables {
  servers:any[];
  countryListService:CountryListService;

  constructor() {
    this.countryListService = new CountryListService();/*TODO: Inject*/
    this.countries = this.countryListService.all();
  }
}
