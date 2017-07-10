import { Component } from '@angular/core';

import { CourseItemComponent } from './components/course-item/course-item.component'
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedCourses = ['CSC108', 'CSC165', 'MAT137', 'PSY100', 'ECO100']
  solutionlist = [['CSC108L0101'], []]
  preferences = []

  deleteCourse(course : string): void {
      this.selectedCourses.splice(this.selectedCourses.indexOf(course), 1);
  }

  addCourse(course : Course) : void {
    this.selectedCourses.push(course.code);
  }
  
}