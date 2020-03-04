import { Component, OnInit } from '@angular/core';
import { PizzaService } from './service/pizza.service';
import { Store, select } from '@ngrx/store';
import { ToppingState } from './store/state/topping.state';
import { getAllToppingAction } from './store/actions/topping.action';
import { Observable } from 'rxjs';
import { ToppingModel } from './models/topping.model';
import { getAllTop20Toppings } from './store/selectors/topping.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  top20Order$: Observable<ToppingModel[]>;

  constructor(private store: Store<ToppingState>) {
    this.top20Order$ = this.store.pipe(select(getAllTop20Toppings));
  }
  ngOnInit() {
    this.store.dispatch(getAllToppingAction());

  }
}
