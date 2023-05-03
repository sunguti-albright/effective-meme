import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesRepository } from './repositories/courses.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesSchema } from './schemas/courses.schema';

@Module({
    imports:[
        //define entity and mongoose schema for module
        MongooseModule.forFeature([
            {
                name: "Course", schema: CoursesSchema
            }
        ])
    ],
    controllers:[CoursesController],
    providers:[CoursesRepository]
})
export class CoursesModule {}
