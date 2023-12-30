import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FrasesService } from 'src/app/frases.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listfrase',
  templateUrl: './listfrase.component.html',
  styleUrls: ['./listfrase.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ListfraseComponent implements OnInit {
  frases: any[] = [];

  @Input() datosDesdePadre: boolean = true;

  constructor(
    private frasesService: FrasesService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.frases = this.frasesService.getFrases();
    this.ionViewWillEnter();
  }

  async deleteFrase(idFrase: number) {
    const alertElement = await this.alertController.create({
      header: '¿Borrar la frase?',
      message: 'Se eliminara por completo',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: () => {
            this.frasesService.deleteFrase(idFrase);
            this.ionViewWillEnter();
          },
        },
      ],
    });
    await alertElement.present();
  }

  ionViewWillEnter() {
    this.frases = this.frasesService.getFrases();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.frases = this.frasesService.getFrases();
  }
}
