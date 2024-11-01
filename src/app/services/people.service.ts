import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Person } from './dtos/person.interface';
import { GetPeopleRequest } from './models/people/get-people.request';
import { CreatePersonRequest } from './models/people/create-person.request';
import { AddUserRequest } from './models/people/add-user.request';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends BaseService {
  constructor() {
    super(environment.authUrl, "people");
  }

  async getAll(request: GetPeopleRequest) {
    return await this.GetAsync<Person[]>('', request);
  }

  async get(guid: string) {
    return await this.GetAsync<Person>(guid);
  }

  async create(request: CreatePersonRequest) {
    return await this.PostAsync<null>('', request);
  }

  async addUser(request: AddUserRequest) {
    return await this.PostAsync<null>('', request);
  }

  async delete(guid: string) {
    return await this.DeleteAsync<null>(guid);
  }
}
