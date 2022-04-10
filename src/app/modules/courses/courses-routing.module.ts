import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { UploadCoursePageComponent } from './pages/upload-course-page/upload-course-page.component';

const routes: Routes = [
  { path: '', component:CoursePageComponent},
  { path: 'upload', component:UploadCoursePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
