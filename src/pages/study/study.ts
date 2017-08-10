import { ModalComponent } from './../../components/modal/modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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
    'img': 'https://polyphasicdevs.com/luckyenglish/img/shortVowels/apple.png'
  },{
    'letter': 'E',
    'word': 'Egg',
    'img': 'https://polyphasicdevs.com/luckyenglish/img/shortVowels/egg.png'
  },{
    'letter': 'I',
    'word': 'Insect',
    'img': 'https://polyphasicdevs.com/luckyenglish/img/shortVowels/insect.png'
  },{
    'letter': 'O',
    'word': 'Orange',
    'img': 'image'
  },{
    'letter': 'U',
    'word': 'Umbrella',
    'img': 'image'
  }];
  longVowels = ['A', 'E', 'I', 'O', 'U'];
  consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
  blends = ['CH','SH','th','TH','oo','OO','OI','OY','ER','UR','IR','AR','OR','AW','OU','OW','ING','PH','TION'];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modelProfile: ModalComponent,
    public modalCtrl: ModalController  
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }

  presentProfileModal(letter, word, img) {
   let profileModal = this.modalCtrl.create(this.modelProfile,{'letter': letter, 'word': word, 'img': img});
   profileModal.present();
 }
}
