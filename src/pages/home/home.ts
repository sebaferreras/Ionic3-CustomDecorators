import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { DisableSideMenu } from '../../app/custom-decorators/disable-side-menu.decorator';

@DisableSideMenu()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  onOpenAboutPage(): void {
    this.navCtrl.push(AboutPage);
  }

}
