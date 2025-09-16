import { Component, OnInit} from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-apolice-seg',
  standalone: false,
  templateUrl: './apolice-seg.html',
  styleUrl: './apolice-seg.css'
})
export class ApoliceSeg implements OnInit{
  sexo = ''
  idd = 0
  valor = 0
  apolice = 0
  calcular(): void {
    if (this.sexo == 'M' && this.idd <= 25) {
      this.apolice = this.valor * 0.15
    } else if (this.sexo == 'M' && this.idd > 25) {
      this.apolice = this.valor * 0.1
    }else if (this.sexo == 'F'){
      this.apolice = this.valor * 0.08
    }else{
      throwError('Sexo Invávlido, Digite M para masculino e F para Feminino')
    }
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
