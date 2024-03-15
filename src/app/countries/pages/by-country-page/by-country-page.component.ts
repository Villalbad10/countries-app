import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countryService: CountriesService) { }

  searchByPais(term: string): void {
    this.countryService.searchCountry(term)
      .subscribe(countries => this.countries = countries);
  }
}
