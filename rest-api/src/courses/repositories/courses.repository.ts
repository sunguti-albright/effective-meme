import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Course } from "src/shared/course";



@Injectable()
export class CoursesRepository{

  async createCourse(course: Partial<Course>): Promise<Course> {
    const newCourse = new this.courseModel(course);

    async findAll() : Promise<Course[]>{
        return this.courseModel.find();
    }

    async updateOne(id:string, changes:Partial<Course>) : Promise<Course>{
      return  this.courseModel.findOneAndUpdate({_id: id}, changes,{new:true})
        // return this.courseModel.updateOne(id, changes);
    }

    async deleteOne(id:string) : Promise<any>{
        return this.courseModel.findByIdAndDelete({_id:id})
    }

}