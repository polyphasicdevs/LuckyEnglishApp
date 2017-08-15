import { ModalComponent } from './../../components/modal/modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

/**
 * Generated class for the StudyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-study',
  templateUrl: 'study.html',
})
export class StudyPage {

  shortVowels = [{
    'letter': 'A',
    'word': 'Apple',
    'img': 'null'
  },{
    'letter': 'E',
    'word': 'Egg',
    'img': 'null'
  },{
    'letter': 'I',
    'word': 'Insect',
    'img': 'null'
  },{
    'letter': 'O',
    'word': 'Orange',
    'img': 'null'
  },{
    'letter': 'U',
    'word': 'Umbrella',
    'img': 'null'
  }];
  longVowels = [{
      'letter': 'A',
      'word': '',
      'img': ''
    },{
      'letter': 'E',
      'word': '',
      'img': ''
    },{
      'letter': 'I',
      'word': '',
      'img': ''
    },{
      'letter': 'O',
      'word': '',
      'img': ''
    },{
      'letter': 'U',
      'word': '',
      'img': ''
    }];
  consonants = [{
    'letter': 'B',
    'word': '',
    'img': ''
  },{
    'letter': 'C',
    'word': '',
    'img': ''
  },{
    'letter': 'D',
    'word': '',
    'img': ''
  },{
    'letter': 'F',
    'word': '',
    'img': ''
  },{
    'letter': 'G',
    'word': '',
    'img': ''
  },{
    'letter': 'H',
    'word': '',
    'img': ''
  },{
    'letter': 'J',
    'word': '',
    'img': ''
  },{
    'letter': 'K',
    'word': '',
    'img': ''
  },{
    'letter': 'L',
    'word': '',
    'img': ''
  },{
    'letter': 'M',
    'word': '',
    'img': ''
  },{
    'letter': 'N',
    'word': '',
    'img': ''
  },{
    'letter': 'P',
    'word': '',
    'img': ''
  },{
    'letter': 'Q',
    'word': '',
    'img': ''
  },{
    'letter': 'R',
    'word': '',
    'img': ''
  },{
    'letter': 'S',
    'word': '',
    'img': ''
  },{
    'letter': 'T',
    'word': '',
    'img': ''
  },{
    'letter': 'V',
    'word': '',
    'img': ''
  },{
    'letter': 'W',
    'word': '',
    'img': ''
  },{
    'letter': 'X',
    'word': '',
    'img': ''
  },{
    'letter': 'Y',
    'word': '',
    'img': ''
  },{
    'letter': 'Z',
    'word': '',
    'img': ''
  },];
  blends = [{
    'letter': 'CH',
    'word': '',
    'img': ''
  },{
    'letter': 'SH',
    'word': '',
    'img': ''
  },{
    'letter': 'th',
    'word': '',
    'img': ''
  },{
    'letter': 'TH',
    'word': '',
    'img': ''
  },{
    'letter': 'oo',
    'word': '',
    'img': ''
  },{
    'letter': 'OO',
    'word': '',
    'img': ''
  },{
    'letter': 'OI',
    'word': '',
    'img': ''
  },{
    'letter': 'OY',
    'word': '',
    'img': ''
  },{
    'letter': 'ER',
    'word': '',
    'img': ''
  },{
    'letter': 'UR',
    'word': '',
    'img': ''
  },{
    'letter': 'IR',
    'word': '',
    'img': ''
  },{
    'letter': 'AR',
    'word': '',
    'img': ''
  },{
    'letter': 'OR',
    'word': '',
    'img': ''
  },{
    'letter': 'AW',
    'word': '',
    'img': ''
  },{
    'letter': 'OU',
    'word': '',
    'img': ''
  },{
    'letter': 'OW',
    'word': '',
    'img': ''
  },{
    'letter': 'ING',
    'word': '',
    'img': ''
  },{
    'letter': 'PH',
    'word': '',
    'img': ''
  },{
    'letter': 'TION',
    'word': '',
    'img': ''
  }];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }

  openModal(letter, word, img){
    let modal = this.modalCtrl.create(ModalComponent,{letter: letter, word: word, image: img});
    modal.present();
  }

}
