import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FrasesService } from 'src/app/frases.service';

@Component({
  selector: 'app-random-frase',
  standalone: true,
  templateUrl: './random-frase.component.html',
  styleUrls: ['./random-frase.component.scss'],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class RandomFraseComponent implements OnInit {
  mostrar = true;
  randomFrase = '';
  randomAutor = '';

  @Input() mostrarST: boolean = true;

  constructor(private frasesService: FrasesService) {}

  ngAfterContentInit() {
    this.mostrar = this.mostrarST;
    this.recargaFraseRandom();
  }

  ngOnInit() {
    this.mostrar = this.mostrarST;
    this.mostrar = this.frasesService.showFrases;
    this.recargaFraseRandom();
    this.ionViewWillEnter();
  }

  recargaFraseRandom() {
    this.mostrar = this.mostrarST;
    var x = this.frasesService.getRandomFrase();
    this.randomFrase = x.frase;
    this.randomAutor = x.autor;
  }

  ionViewWillEnter() {
    this.mostrar = this.mostrarST;
    this.mostrar = this.frasesService.showFrases;
    this.recargaFraseRandom();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.mostrar != this.mostrarST) {
      this.mostrar = this.mostrarST;
      this.recargaFraseRandom();
    }
  }
}
