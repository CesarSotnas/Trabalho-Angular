import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  SERVER_URL = API_PATH;
  constructor(private http: HttpClient) {}

  public getDados() {
    return this.http.get(this.SERVER_URL + 'post');
  }
}
