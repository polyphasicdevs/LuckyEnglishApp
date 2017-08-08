import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyPage } from './study';

@NgModule({
  declarations: [
    StudyPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyPage),
  ],
})
export class StudyPageModule {}
