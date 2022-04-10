import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './components/course/course.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { UploadCourseComponent } from './components/upload-course/upload-course.component';
import { UploadCoursePageComponent } from './pages/upload-course-page/upload-course-page.component';

@NgModule({
  declarations: [
    CourseComponent,
    CoursePageComponent,
    UploadCourseComponent,
    UploadCoursePageComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
