import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'https://viacep.com.br/ws/{0}/json/';

interface ViaCepAddress {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  estado: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  regiao: string;
  siafi: string;
  uf: string;
  unidade: string;
}

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
  constructor(private http: HttpClient) { }

  getAddress(cep: string) {
    return this.http.get<ViaCepAddress>(url.replace('{0}', cep));
  }
}
