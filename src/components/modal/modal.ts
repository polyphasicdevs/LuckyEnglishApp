import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the ModalComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {

    letter: string;
    word: string;
    img: string;

  constructor(
    public viewCtrl: ViewController,
    params: NavParams
  ) {
    this.letter = params.get('letter');
    this.word = params.get('word');
    this.img = params.get('image');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
