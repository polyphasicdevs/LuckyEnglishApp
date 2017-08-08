import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  shortVowels = ['A', 'E', 'I', 'O', 'U'];
  longVowels = ['A', 'E', 'I', 'O', 'U'];
  consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
  blends = ['CH','SH','th','TH','oo','OO','OI','OY','ER','UR','IR','AR','OR','AW','OU','OW','ING','PH','TION'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }

}
