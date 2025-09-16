import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convers-temp',
  standalone: false,
  templateUrl: './convers-temp.html',
  styleUrl: './convers-temp.css'
})
export class ConversTemp implements OnInit{
  C = 0
  F = 0
  K = 0
  result = 0
  
  calcular(): void{
    this.F = (this.C * 9/5) + 32

    this.K = this.C + 273.15
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
