import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-media',
  standalone: false,
  templateUrl: './calc-media.html',
  styleUrl: './calc-media.css'
})
export class CalcMedia implements OnInit{
  
  AC1 = 0
  AC2 = 0
  AG = 0
  AF = 0
  media = 0
  calcular(): void{
    
    this.media = (this.AC1 * 0.15) + (this.AC2 * 0.3) + (this.AG * 0.1) + (this.AF * 0.45)
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
