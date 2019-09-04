import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CredenciaisDTO } from '../../models/credenciaisDTO';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = { email: "", senha: "" };

  constructor(public navCtrl: NavController, public menu: MenuController, private auth: AuthService) {

  }

  login() {

    this.auth.authenticate(this.creds).subscribe(res => {
      console.log(res.headers.get("Authorization"));
      this.navCtrl.setRoot("CategoriasPage");
    }, error => { })

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
}
