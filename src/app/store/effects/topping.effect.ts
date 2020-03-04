import { Action } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { mergeMap, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PizzaService } from 'src/app/service/pizza.service';
import { getAllToppingAction, getAllToppingSuccessAction } from '../actions/topping.action';

@Injectable()
export class ToppingEffects {
    constructor(private actions: Actions,
        private pizzaService: PizzaService) {

    }
    getAllToppingsEffect$: Observable<Action> = createEffect(
        () => this.actions.pipe(
            ofType(getAllToppingAction),
            mergeMap(() => this.pizzaService.getAllTopings().pipe(
                map((result) => getAllToppingSuccessAction({ payload: result }))
            ))
        )
    );
}