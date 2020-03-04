import { createReducer, on, Action } from '@ngrx/store';
import { initialState } from '../state/topping.state';
import { getAllToppingSuccessAction } from '../actions/topping.action';
import { toppingEntityApapter } from '../entity/topping.entity';


const reducer = createReducer(initialState,
    on(getAllToppingSuccessAction, (state, { payload }) => {
        return toppingEntityApapter.addOne(payload, state);
    })
);

export function AppReducer(initialState, action: Action) {
    return reducer(initialState, action);
}