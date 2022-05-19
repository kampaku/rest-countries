import type { Country } from '../types/types';

class Api {
  url: string;

  constructor() {
    this.url = 'https://restcountries.com/v3.1/';
  }

  getAllCounties = async (): Promise<Country[]> => {
    const response = await fetch(this.url);
    const countries = await response.json();
    return countries;
  };

  getCountry = async (id: string): Promise<Country> => {
    const response = await fetch(`${this.url}/${id}`);
    const country = await response.json();
    return country;
  };
}

export default Api;
