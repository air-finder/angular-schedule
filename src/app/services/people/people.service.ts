import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { environment } from '../../../environments/environment';
import { Person } from '@models/services/dtos/person';
import { CreatePersonRequest } from '@models/services/people/create-person.request';
import { AddUserRequest } from '@models/services/people/add-user.request';
import { GetPeopleRequest } from '@models/services/people/get-people.request';

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
