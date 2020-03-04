import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PizzaService } from './service/pizza.service';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/reducers/topping.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ToppingEffects } from './store/effects/topping.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ 'AppState': AppReducer }),
    EffectsModule.forRoot([ToppingEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
