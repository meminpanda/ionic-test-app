import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:any;

  constructor(
                public navCtrl:NavController,
                public navParams:NavParams,
                public _listaDeseos:ListaDeseosService,
                public alertCtrl: AlertController
                ) {

                  this.idx = navParams.get("idx");
                  this.lista = navParams.get("lista");
                  console.log(this.idx, this.lista);
                 }

  ngOnInit() {}

  actualizar(item:ListaItem){

    item.completado = !item.completado;

    let todosMarcados = true;
    for( let item of this.lista.items ){
      if( !item.completado ){
        todosMarcados = false;
        break;
      }
    }
    
    this.lista.terminada = todosMarcados;

    this._listaDeseos.actualizarData();

  }

  borrarItem(){
    let alerta = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'Esta seguro que desea borrar la lista?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this._listaDeseos.borrarLista(this.idx);
            let alert = this.alertCtrl.create({
              title: 'Lista Borrada',
              subTitle: 'Se ha borrado la lista con exito!',
              buttons: ['OK']
            });
            alert.present();
            this.navCtrl.pop();
          }
        }
      ]
    });
    alerta.present();
  }

}
