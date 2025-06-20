import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../../services/poke-api.service';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, 
  IonImg, IonList, IonItem, IonLabel, IonItemDivider, IonProgressBar
} from '@ionic/angular/standalone';
import { UpperCasePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonImg, IonList, IonItem, IonLabel, IonItemDivider, IonProgressBar,
    UpperCasePipe, DecimalPipe
  ]
})
export class DetailsPage {
  pokemon: any;
  stats: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pokeApi: PokeApiService
  ) {}

  ionViewWillEnter() {
    const pokemonName = this.route.snapshot.paramMap.get('name');
    if (pokemonName) {
      this.loadPokemonDetails(pokemonName);
    }
  }

  async loadPokemonDetails(name: string) {
    try {
      this.pokemon = await this.pokeApi.getPokemonDetails(name);
      console.log('Pokémon data:', this.pokemon);
      
      if (this.pokemon?.stats) {
        this.stats = this.pokemon.stats.map((stat: any) => ({
          name: this.formatStatName(stat.stat.name),
          value: stat.base_stat,
          max: this.getStatMax(stat.stat.name)
        }));
        console.log('Stats processed:', this.stats);
      }
    } catch (error) {
      console.error('Error loading details:', error);
    }
  }

  getTypesString(): string {
    if (!this.pokemon?.types) return 'Carregando...';
    return this.pokemon.types
      .map((t: any) => t.type.name.toUpperCase())
      .join(' / ');
  }

  private formatStatName(statName: string): string {
    const statNames: {[key: string]: string} = {
      'hp': 'HP',
      'attack': 'Ataque',
      'defense': 'Defesa',
      'special-attack': 'Atq. Especial',
      'special-defense': 'Def. Especial',
      'speed': 'Velocidade'
    };
    return statNames[statName.toLowerCase()] || statName;
  }

  private getStatMax(statName: string): number {
    const maxValues: {[key: string]: number} = {
      'hp': 255,
      'attack': 190,
      'defense': 230,
      'special-attack': 194,
      'special-defense': 230,
      'speed': 180
    };
    return maxValues[statName.toLowerCase()] || 100;
  }

  getProgressBarColor(statName: string): string {
    const colors: {[key: string]: string} = {
      'HP': 'danger',
      'Ataque': 'warning',
      'Defesa': 'success',
      'Atq. Especial': 'tertiary',
      'Def. Especial': 'primary',
      'Velocidade': 'secondary'
    };
    return colors[statName] || 'medium';
  }
}