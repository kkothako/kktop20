import { createAction, props } from '@ngrx/store';
import { ToppingModel } from './../../models/topping.model';

export const getAllToppingAction = createAction(
    '[Toppings] Get All '
);

export const getAllToppingSuccessAction = createAction(
    '[Toppings] Get All Success ',
    props<{ payload: any }>()
);