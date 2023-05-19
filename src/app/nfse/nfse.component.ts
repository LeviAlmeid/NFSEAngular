import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nfse',
  templateUrl: './nfse.component.html',
  styleUrls: ['./nfse.component.scss']
})
export class NfseComponent implements OnInit {

  formulario: any;
  tituloFormulario: any;

  constructor(){}

  ngOnInit(): void{

    this.tituloFormulario = "Gerar Nfse";
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      idade: new FormControl(null),

    });
  }

}
