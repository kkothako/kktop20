import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ToppingState } from '../state/topping.state';

export const appSelector = createFeatureSelector<any>('AppState');

export const getAllTop20Toppings = createSelector(
    appSelector,
    state =>{
        // Here the key is time being undefined
        const toppings = state.entities["undefined"];
        var totalOrderList = {};
        var orderList = [];
        for (var topping in toppings) {
          var order = toppings[topping];
          var key = order.toppings.sort().toString();
          if (totalOrderList[key] == null) {
            totalOrderList[key] = 1;
          } else {
            totalOrderList[key]++;
          }
        }

        for (var y in totalOrderList) {
          orderList.push({ "toppings": y, "count": totalOrderList[y] });
        }
        orderList.sort((a, b) => {
          return b.count - a.count;
        });
        let top20Orders = orderList.slice(0, 20);

        return top20Orders;
    }
);