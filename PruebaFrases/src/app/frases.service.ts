import { Injectable } from '@angular/core';
import { Frase } from './frases.model';

@Injectable({
  providedIn: 'root',
})
export class FrasesService {
  private frases: Frase[] = [
    {
      id: 1,
      frase: 'El poto o la vida',
      autor: 'El Brayan',
      fecha_creacion: new Date(),
    },
    {
      id: 2,
      frase: 'Camaron que se duerme es porque piedras trae',
      autor: 'Chapulin colorado',
      fecha_creacion: new Date(),
    },
    {
      id: 3,
      frase: 'Mi mama me los compro',
      autor: 'El Flaco',
      fecha_creacion: new Date(),
    },
  ];

  showFrases = true;

  constructor() {}
  getFrases() {
    return [...this.frases];
  }

  getFrase(placeId: number) {
    return {
      ...this.frases.find((frase) => {
        return frase.id === placeId;
      }),
    };
  }

  getRandomFrase() {
    return {
      ...this.frases[Math.floor(Math.random() * this.frases.length)],
    };
  }

  addFrase(frase: string, autor: string) {
    this.frases.push({
      id: this.frases.length + 1,
      frase: frase,
      autor: autor,
      fecha_creacion: new Date(),
    });
  }

  deleteFrase(placeId: number) {
    this.frases = this.frases.filter((frase) => {
      return frase.id !== placeId;
    });
  }
}
