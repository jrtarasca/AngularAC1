import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-imc',
  standalone: false,
  templateUrl: './calc-imc.html',
  styleUrl: './calc-imc.css'
})
export class CalcIMC implements OnInit{
  peso = 0;
  altura = 0;
  IMC = 0;
  resultado = ''
  somar(): void {
    this.IMC = this.peso/this.altura;

    if (this.IMC < 18.5) {
      this.resultado = 'Abaixo do Peso'
    } else if (this.IMC >= 18.5 && this.IMC <=24.9){
      this.resultado = 'Peso Normal'
    } else if(this.IMC >= 25 && this.IMC <=29.9){
      this.resultado = 'Sobrepeso'
    }else if(this.IMC >= 30 && this.IMC <= 34.9){
      this.resultado = 'Obesidade Grau I'
    }else if(this.IMC >= 35 && this.IMC <=39.9){
      this.resultado = 'Obesidade Grau II'
    }else if(this.IMC >= 40){
      this.resultado = 'Obesidade Morbida'
    }
  }

  calcular(): void{
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
