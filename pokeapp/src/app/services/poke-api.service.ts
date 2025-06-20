import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiUrl = 'https://pokeapi.co/api/v2'; // Conecta ao PokeAPI

  async getPokemonList(offset = 0, limit = 1000){
    const response = await axios.get(`${this.apiUrl}/pokemon?offset=${offset}&limit=${limit}`);
    return response.data.results;
  }

  async getPokemonDetails(name : string){
    const response = await axios.get(`${this.apiUrl}/pokemon/${name}`);
    return response.data;
  }

  
}
