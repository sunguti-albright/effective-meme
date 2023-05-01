import { Controller, Get } from '@nestjs/common';
import { findAllCourses } from 'src/db-data';
import { Course } from 'src/shared/course';


//controllers send requests to the server and return the specific responses
@Controller()
export class CoursesController {
  @Get('api/courses')
  async getAllCourses(): Promise<any> {
    //get data from mongo-db
    
    return findAllCourses();
  }

  @Get('api/hello')
  async helloWorld(){
    return "hello"
  }
}
