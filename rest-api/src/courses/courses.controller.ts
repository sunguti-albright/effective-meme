import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Course } from 'src/shared/course';
import { CoursesRepository } from './repositories/courses.repository';

//controllers send requests to the server and return the specific responses
@Controller('courses')
export class CoursesController {
  constructor(private courseRepo: CoursesRepository) { }

  // @Get('api/hello')
  // async helloWorld() {
  //   return 'hello';
  // }
  @Post()
  async createCourse(@Body() course: Partial<Course>): Promise<Course> {
    return this.courseRepo.createCourse(course)
  }
  @Get()
  async getAllCourses(): Promise<Course[]> {
    //get data from mongo-db
    return this.courseRepo.findAll();
    // return findAllCourses(); -----this works locally
  }

  @Put(':courseId')
  async updateCourse(
    @Param('courseId') courseId: string,
    @Body() changes: Partial<Course>,
  ): Promise<Course> {
    return this.courseRepo.updateOne(courseId, changes)
  }

  @Delete(':courseId')
  async deleteCourse(
    @Param('courseId') courseId: string
  ): Promise<any> {
    return this.courseRepo.deleteOne(courseId)
  }
}
