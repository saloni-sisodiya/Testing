import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyGlassComponent } from './buy-glass/buy-glass.component';
import { OrderSampleComponent } from './order-sample/order-sample.component';
import { GlassPerformanceCalculatorComponent } from './glass-performance-calculator/glass-performance-calculator.component';
import { DeliveryManagementSystemComponent } from './delivery-management-system/delivery-management-system.component';
import { CloudSaasSolutionComponent } from './cloud-saas-solution/cloud-saas-solution.component';
import { GreenBuildingSolutionComponent } from './green-building-solution/green-building-solution.component';


@NgModule({
  declarations: [
    AppComponent,
    BuyGlassComponent,
    OrderSampleComponent,
    GlassPerformanceCalculatorComponent,
    DeliveryManagementSystemComponent,
    CloudSaasSolutionComponent,
    GreenBuildingSolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
