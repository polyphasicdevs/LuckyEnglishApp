import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { StudyPage } from '../study/study';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StudyPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
