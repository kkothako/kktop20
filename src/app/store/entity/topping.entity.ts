import {EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import { ToppingModel } from 'src/app/models/topping.model';


export const toppingEntityApapter: EntityAdapter<any>  = createEntityAdapter<any>();
