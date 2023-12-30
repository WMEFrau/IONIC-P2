import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trashOutline, addOutline } from 'ionicons/icons';
import { FrasesService } from '../frases.service';
import { AlertController } from '@ionic/angular';
import { ListfraseComponent } from '../frasescrud/listfrase/listfrase.component';
import { AddfraseComponent } from '../frasescrud/addfrase/addfrase.component';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frasescrud',
  templateUrl: './frasescrud.page.html',
  styleUrls: ['./frasescrud.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListfraseComponent,
    AddfraseComponent,
  ],
})
export class FrasescrudPage implements OnInit {
  update: boolean = true;

  constructor(
    private frasesService: FrasesService,
    private alertController: AlertController,
    private router: Router
  ) {
    addIcons({ trashOutline, addOutline });
  }

  recibeSolicitud(datos: string) {
    this.update = !this.update;
  }

  ngOnInit() {}
}
