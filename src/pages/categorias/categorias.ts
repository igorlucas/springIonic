import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { categoriaDTO } from '../../models/categoriaDTO';
import { API_CONFIG } from '../../config/api.config';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;
  itens: categoriaDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriaService: CategoriaService) {
  }

  ionViewDidLoad() {

    this.categoriaService.findAll().subscribe(res => {
      this.itens = res;
    }, error => { });

  }

  showProdutos(categoriaId: string) {
    this.navCtrl.setRoot("ProdutosPage", { categoriaId: categoriaId });
  }

}
