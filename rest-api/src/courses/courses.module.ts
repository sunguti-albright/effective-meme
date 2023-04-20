import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesRepository } from './repositories/courses.repository';

@Module({
    controllers:[CoursesController],
    providers:[CoursesRepository]
})
export class CoursesModule {}
