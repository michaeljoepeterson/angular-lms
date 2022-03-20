import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './components/course/course.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';

@NgModule({
  declarations: [
  
    CourseComponent,
       CoursePageComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
