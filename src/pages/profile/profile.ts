import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { ClienteDTO } from '../../models/clienteDTO';
import { ClienteService } from '../../services/domain/cliente.service';
import { API_CONFIG } from '../../config/api.config';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  cliente: ClienteDTO;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: StorageService, private clienteService: ClienteService) {
  }

  ionViewDidLoad() {

    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).subscribe(res => {
        this.cliente = res;
      }, error => {
        if (error.status == 403)
          this.navCtrl.setRoot("HomePage");
      })
    } else {
      this.navCtrl.setRoot("HomePage");
    }
  }

  getImageIfExists() {
    this.clienteService.getImageFromBucket(this.cliente.id)
      .subscribe(response => {
        this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
        this.blobToDataURL(response).then(dataUrl => {
          //let str : string = dataUrl as string;
          //this.profileImage = this.sanitizer.bypassSecurityTrustUrl(str);
        });
      },
        error => {

          //this.profileImage = 'assets/imgs/avatar-blank.png';
        });
  }

  // https://gist.github.com/frumbert/3bf7a68ffa2ba59061bdcfc016add9ee
  blobToDataURL(blob) {
    return new Promise((fulfill, reject) => {
      let reader = new FileReader();
      reader.onerror = reject;
      reader.onload = (e) => fulfill(reader.result);
      reader.readAsDataURL(blob);
    })
  }

}
