import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MachineCalculatorService {
  machineCalculatorServerUrl = environment.machineCalculatorServerBaseUrl;

  constructor(private http: HttpClient) {}

  postTuples(tuples: any) {
    return this.http.post(
      this.machineCalculatorServerUrl + 'calculator/',
      tuples
    );
  }
}
