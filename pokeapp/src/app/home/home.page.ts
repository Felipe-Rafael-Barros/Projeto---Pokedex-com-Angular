import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/angular/standalone';
import { PokeApiService } from '../services/poke-api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonList,
    IonItem, 
    CommonModule,
    RouterLink 
  ],
})
export class HomePage {
  pokemons: any[] = [];

  constructor(private pokeApi: PokeApiService) {}

  async loadPokemons() {
    this.pokemons = await this.pokeApi.getPokemonList();
  }

  ionViewDidEnter() {
    this.loadPokemons();
  }
}