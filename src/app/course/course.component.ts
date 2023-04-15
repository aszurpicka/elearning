import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courses = [{
    "id" : 1,
    "name" : "Learn Angular",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image" : "assets/angular.jpg"
  },
  {
    "id" : 2,
    "name" : "Learn TypeScript",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image" : "assets/typescript.jpg"
  },
  {
    "id" : 3,
    "name" : "Learn Node.js",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image" : "assets/nodejs.jpg"
  },
  {
    "id" : 4,
    "name" : "Learn React.js",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image" : "assets/reactjs.jpg"
  }]
}
