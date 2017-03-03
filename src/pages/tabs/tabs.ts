import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AnalyticsPage } from '../analytics/analytics';
import { InfoPage } from '../info/info';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AnalyticsPage;
  tab3Root: any = InfoPage;
  tab4Root: any = SettingsPage;

  constructor() {

  }
}
