import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Course } from 'src/shared/course';
import { CoursesRepository } from './repositories/courses.repository';
import { CoursesDto } from './dto/courses.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

//controllers send requests to the server and return the specific responses
@Controller('courses')
export class CoursesController {
  constructor(private courseRepo: CoursesRepository) {}

  // @Get('api/hello')
  // async helloWorld() {
  //   return 'hello';
  // }
  @Post()
  async createCourse(
    @Res() response,
    @Body() course: CoursesDto,
  ): Promise<Course> {
    // return this.courseRepo.createCourse(course) ---->this should work

    try {
      const newCourse = await this.courseRepo.createCourse(course);
      return response.status(HttpStatus.CREATED).json({
        message: 'Course has been created successfully',
        newCourse,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Course not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getAllCourses(): Promise<Course[]> {
    //get data from mongo-db
    return this.courseRepo.findAll();
    // return findAllCourses(); -----this works locally
  }

  @Put(':courseId')
  async updateCourse(
    @Res() response,
    @Param('courseId') courseId: string,
    // @Body() changes: Partial<Course>,
    @Body() changes: UpdateCourseDto,
  ): Promise<Course> {
    // return this.courseRepo.updateOne(courseId, changes) try {
    try {
      const existingCourse = await this.courseRepo.updateOne(courseId, changes);
      return response.status(HttpStatus.OK).json({
        message: 'Course has been successfully updated',
        existingCourse,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete(':courseId')
  async deleteCourse(@Param('courseId') courseId: string): Promise<any> {
    return this.courseRepo.deleteOne(courseId);
  }
}
