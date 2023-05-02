import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Course } from "src/shared/course";



@Injectable()
export class CoursesRepository{

    constructor(@InjectModel('Course')private courseModel : Model<Course>){}

   async findOne() : Promise<Course[]>{
        return
    }

    async findAll() : Promise<Course[]>{
        return this.courseModel.find();
    }

    async updateOne() : Promise<Course[]>{
        return
    }

    async deleteOne() : Promise<Course[]>{
        return
    }

}