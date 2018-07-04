import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  snowGeneralComp = false;
  showFootballComp = false;
  showSAComp = false;
  showFinalScore = false;
  f_q1: string;
  f_q2: string;
  f_q3: string;
  f_q4: string;
  f_q5: string;
  ft_score: number = 0;
  tnf_score: number = 0;
  generalScore: number = 0;
  finalScore:number = 0;
  g_q3;
  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {


  }
  category(x) {

    if (x === 'f') {
      this.showSAComp = false;
      this.showFootballComp = true;
      this.snowGeneralComp = false;

    }
    else if (x === 'sa') {
      this.showFootballComp = false;
      this.showSAComp = true;
      this.snowGeneralComp = false;
    } else if (x === 'g') {
      this.showFootballComp = false;
      this.showSAComp = false;
      this.snowGeneralComp = true;
    }
  }
  checkAnswer() {

    if (this.f_q1 !== '' && this.f_q2 !== '' && this.f_q3 !== '' && this.f_q4 !== '' && this.f_q5 != null) {

      if (this.f_q1.toUpperCase() === 'GERMANY') {
        this.ft_score += 1;
      }

      if (this.f_q2.toUpperCase() === 'ROGER DE SA') {
        this.ft_score += 1;
      }
      if (this.f_q3.toUpperCase() === 'SEVILLE') {
        this.ft_score += 1;
      }
      if (this.f_q4.toUpperCase() === 'ENGLAND') {
        this.ft_score += 1;
      }
      if (this.f_q5.toUpperCase() === 'RONALDO') {
        this.ft_score += 1;
      }
    }
    alert("your score is" + this.ft_score);
    this.presentToast();
    this.showSAComp = true;
  }
  checktnf(a) {

    if (a === 'q1t') {
      this.tnf_score += 1;
      alert("correct");
    } else if (a === 'q1f') {
      alert("incorrect!!!");
    }

    if (a === 'q2t') {
      this.tnf_score += 1;
      alert("correct");
    } else if (a === 'q1f') {
      alert("incorrect!!!");
    }

    if (a === 'q3t') {
      this.tnf_score += 1;
      alert("correct");
    } else if (a === 'q3f') {
      alert("incorrect!!!");
    }

    if (a === 'q4t') {
      this.tnf_score += 1;
      alert("correct");
    } else if (a === 'q4f') {
      alert("incorrect!!!");
    }

    if (a === 'q5t') {
      this.tnf_score += 1;
      
      this.presentToast();
      this.snowGeneralComp = true;
    } else if (a === 'q5f') {
      alert("incorrect!!!");
      alert("Your Score is :" + this.tnf_score);
      this.presentToast();
      this.snowGeneralComp = true;

    }


  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Quiz SuccessFully Completed.',
      duration: 3000,
      position: 'down'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  checkgeneral(x) {

   
    
    if (x === 'a') {
      this.generalScore += 1;
    }
    else if (x === 'b') {
      this.generalScore += 1;
    }
    else if (x === 'c') {
      this.generalScore += 1;
    }
    else if (x === 'd') {
      this.generalScore += 1;
    }

  }
  checkGeneralText(x) {

    if (x === 'AKA') {
      this.generalScore += 1;
    }
    this.presentToast();
    this.showFootballComp = false;
      this.showSAComp = false;
      this.finalScore = this.ft_score + this.generalScore+this.tnf_score;
      this.snowGeneralComp = true;
  }
}
