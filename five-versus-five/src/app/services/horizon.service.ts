import { Injectable } from '@angular/core';
declare var Horizon: any;

@Injectable({
  providedIn: 'root',
})
export class HorizonService {
  public table = Horizon({ host: 'localhost:8181' });
  constructor() {}
}
