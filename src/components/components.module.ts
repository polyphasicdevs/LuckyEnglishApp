import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal';
@NgModule({
	declarations: [ModalComponent],
	imports: [IonicPageModule.forChild(ModalComponent)],
	exports: [ModalComponent]
})
export class ComponentsModule {}
