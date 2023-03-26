import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompagnesListComponent } from "./modules/compagnes-list/compagnes-list.component";
import { CompaignFormularComponent } from "./modules/compaign-formular/compaign-formular.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full",
      },
      {
        path: "list",
        component: CompagnesListComponent,
      },
      {
        path: "list/details/:id",
        component: CompaignFormularComponent,
      },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: "always" })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
