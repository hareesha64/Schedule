import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';


const routes: Routes =  [{path:"",redirectTo:'/dashboard','pathMatch':'full'},{
  path:"dashboard",component:DashboardComponent
},

{path:"list",component:ListComponent},
{path:"edit/:id",component:EditComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
