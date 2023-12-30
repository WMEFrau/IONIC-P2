import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FrasesService } from 'src/app/frases.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfrase',
  templateUrl: './addfrase.component.html',
  styleUrls: ['./addfrase.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AddfraseComponent implements OnInit {
  constructor(private frasesService: FrasesService) {}

  ngOnInit() {}

  @Output() eventoCambio: EventEmitter<string> = new EventEmitter();

  avisaCambio() {
    const aviso: string = 'Actualizar';
    this.eventoCambio.emit(aviso);
  }

  addFrase(frase: any, autor: any) {
    var ifrase: string = frase.value?.toString()!;
    var iautor: string = autor.value?.toString()!;

    this.frasesService.addFrase(ifrase, iautor);
    this.avisaCambio();
  }
}
