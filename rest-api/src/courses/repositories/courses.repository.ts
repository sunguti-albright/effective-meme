import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { async } from 'rxjs/internal/scheduler/async';
import { Course } from 'src/shared/course';
import { CoursesDto } from '../dto/courses.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';

@Injectable()
export class CoursesRepository {
  constructor(@InjectModel('Course') private courseModel: Model<Course>) {}

  // async createCourse(course: Partial<Course>): Promise<Course> {
    async createCourse(courseDto : CoursesDto): Promise<Course> {
    const newCourse = await new this.courseModel(courseDto);
    //this is the new course : Course Model object with ID(not a partial)
    await newCourse.save();
    //toObject() formats and serializes the data so that it can easily be accessed in the frontend
    //versionKey : false : always invert new version of the course as it is expected in the database
    return newCourse.toObject({versionKey:false});
   
    // return this.courseModel.create(); -----this works
  }
  async findOne(): Promise<Course[]> {
    return;
  }

  async findAll(): Promise<Course[]>{
    return this.courseModel.find();
  }

  // async updateOne(id: string, changes: Partial<Course>): Promise<Course> {
    async updateOne(id: string, changes: UpdateCourseDto): Promise<Course> {
      const existingCourse = await this.courseModel.findOneAndUpdate({ _id: id }, changes, {
      new: true,
    });
    if(!existingCourse){
      throw new NotFoundException(`Course ${id} not found`)
    } return existingCourse
    // return this.courseModel.updateOne(id, changes);
  }

  async deleteOne(id: string): Promise<any> {
    return this.courseModel.findByIdAndDelete({ _id: id });
  }
}
