import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/shared/data-fetch/data.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsersService extends DataService {
  apiPath = environment.apiPaths.Users
  constructor(
    http: HttpClient
  ) { super(http) }
}
