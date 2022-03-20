import { Component, OnInit } from '@angular/core';
import { ScormService } from '../../../../services/scorm.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  constructor(
    private scormService:ScormService
  ) { }

  ngOnInit(): void {
  }

}
