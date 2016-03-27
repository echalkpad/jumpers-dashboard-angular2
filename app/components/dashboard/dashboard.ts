import {Component, View} from 'angular2/angular2';

import {RdLoading} from 'components/rd-loading/rd-loading';
import {RdWidget} from 'components/rd-widget/rd-widget';

import {RdWidgetHeader} from 'components/rd-widget-header/rd-widget-header';
import {RdWidgetBody} from 'components/rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from 'components/rd-widget-footer/rd-widget-footer';

import {CountryListView} from 'components/country-list-view/country-list-view';
import {CountryListService} from 'services/country_list';

import {JumperListView} from 'components/jumper-list-view/jumper-list-view';
import {JumperListService} from 'services/jumper_list';


@Component({
  selector: 'dashboard',
  appInjector: [CountryListService]
})
@View({
  templateUrl: './components/dashboard/dashboard.html',
  styleUrls: ['./components/dashboard/dashboard.css'],
  directives: [RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading, CountryListView, JumperListView]
})
export class Dashboard {

  servers:any[];
  users:any[];

  countryListService:CountryListService;
  jumperListService:JumperListService;

  constructor() {
    this.countryListService = new CountryListService();
    /*TODO: Inject*/
    this.countries = this.countryListService.all();

    this.jumperListService = new JumperListService();
    /*TODO: Inject*/
    this.jumpers = this.jumperListService.all();
  }
}
