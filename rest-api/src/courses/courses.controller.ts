import { Controller, Get } from '@nestjs/common';
import { findAllCourses } from 'src/db-data';
import { Course } from 'src/shared/course';



@Controller()
export class CoursesController {
  @Get('api/courses')
  async getAllCourses(): Promise<any> {
    //get data from mongo-db
    
    return findAllCourses();
  }
}
