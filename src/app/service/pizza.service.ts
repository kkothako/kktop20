import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PizzaService {
    constructor(private httpClient: HttpClient) { }
    getAllTopings(): Observable<any> {
        return this.httpClient.get<any>('http://files.olo.com/pizzas.json')
    }
}