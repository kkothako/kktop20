import { EntityState } from '@ngrx/entity'
import { ToppingModel } from 'src/app/models/topping.model';
import { toppingEntityApapter } from '../entity/topping.entity';
export interface ToppingState extends EntityState<any> {


}

export const defaultState: ToppingState = {
    ids: [],
    entities: {}
}

export const initialState = toppingEntityApapter.getInitialState(defaultState);