import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, 
  { path: 'experience', component: ExperienceComponent }, 
  { path: 'projects', component: ProjectsComponent }, 
  { path: '', redirectTo:'/', pathMatch: 'full' }, 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
exports:[
  RouterModule
]
})
export class RoutingModule { }
