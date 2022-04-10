import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCoursePageComponent } from './upload-course-page.component';

describe('UploadCoursePageComponent', () => {
  let component: UploadCoursePageComponent;
  let fixture: ComponentFixture<UploadCoursePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCoursePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
