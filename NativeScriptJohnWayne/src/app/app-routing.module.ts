import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
// import { PizzasComponent } from "./pizzas/pizzas.component";
import { Practica1Component } from "./practica1/practica1.component";

const routes: Routes = [
    { path: "", redirectTo: "/practica1", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    // { path: "pizzas", component: PizzasComponent },
    { path: "practica1", component: Practica1Component },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
