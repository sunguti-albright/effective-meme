import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from 'src/shared/course';

@Injectable()
export class CoursesRepository {
  constructor(@InjectModel('Course') private courseModel: Model<Course>) {}

  async createCourse(course: Partial<Course>): Promise<Course> {
    const newCourse = new this.courseModel(course);
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

  async findAll(): Promise<Course[]> {
    return this.courseModel.find();
  }

  async updateOne(id: string, changes: Partial<Course>): Promise<Course> {
    return this.courseModel.findOneAndUpdate({ _id: id }, changes, {
      new: true,
    });
    // return this.courseModel.updateOne(id, changes);
  }

  async deleteOne(id: string): Promise<any> {
    return this.courseModel.findByIdAndDelete({ _id: id });
  }
}
