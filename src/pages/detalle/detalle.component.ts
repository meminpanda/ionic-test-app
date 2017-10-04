import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
  constructor(
                public navCtrl:NavController,
                public navParams:NavParams
                ) {  }

  ngOnInit() {}
}
