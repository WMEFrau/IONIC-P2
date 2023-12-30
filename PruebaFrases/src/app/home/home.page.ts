import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FrasesService } from 'src/app/frases.service';

import { RandomFraseComponent } from '../home/random-frase/random-frase.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RandomFraseComponent],
})
export class HomePage implements OnInit {
  mostrar = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private frasesService: FrasesService
  ) {
    addIcons({ settingsOutline });
  }

  ngOnInit() {
    this.mostrar = this.frasesService.showFrases;
    this.ionViewWillEnter();
  }

  frasesNavigate() {
    this.router.navigate(['/frases']);
  }

  configNavigate() {
    this.router.navigate(['/config']);
  }

  ionViewWillEnter() {
    this.mostrar = this.frasesService.showFrases;
  }
}
