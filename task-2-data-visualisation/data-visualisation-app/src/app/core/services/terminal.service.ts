import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TerminalService {
  terminalServerUrl = environment.terminalServerBaseUrl;

  constructor(private http: HttpClient) {}

  getStatus() {
    return this.http.get(this.terminalServerUrl);
  }
}
