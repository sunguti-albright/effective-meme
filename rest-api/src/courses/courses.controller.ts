import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { Course } from 'src/shared/course';
import { CoursesRepository } from './repositories/courses.repository';

//controllers send requests to the server and return the specific responses
@Controller()
export class CoursesController {
  constructor(private courseRepo: CoursesRepository) {}

  @Get('api/hello')
  async helloWorld() {
    return 'hello';
  }

  @Get('api/courses')
  async getAllCourses(): Promise<Course[]> {
    //get data from mongo-db
    return this.courseRepo.findAll();
    // return findAllCourses(); -----this works locally
  }

  @Put('api/courses/:courseId')
  async updateCourse(
    @Param('courseId') courseId: string,
    @Body() changes: Partial<Course>,
  ) {}
}
