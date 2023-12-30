import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FrasesService } from '../frases.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.page.html',
  styleUrls: ['./configurations.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ConfigurationsPage implements OnInit {
  constructor(private frasesService: FrasesService) {}
  toggle = true;
  ngOnInit() {
    this.toggle = this.frasesService.showFrases;
  }

  toggleChange() {
    this.toggle = !this.toggle;
    this.frasesService.showFrases = this.toggle;
  }
}
