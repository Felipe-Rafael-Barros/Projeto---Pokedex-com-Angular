import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonAvatar, IonIcon,IonImg } from '@ionic/angular/standalone';
import { PokeApiService } from '../../services/poke-api.service';
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
    IonAvatar,
    IonIcon,
    IonImg,
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

  // Método para obter a imagem do Pokémon
  getPokemonImage(url: string): string {
    const id = this.getPokemonId(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  // Extrai o ID da URL
  private getPokemonId(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2]);
  }

  // Fallback para imagens quebradas
  handleImageError(event: any) {
    event.target.src = 'assets/pokeball.png'; 
  }
}