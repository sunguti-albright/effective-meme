import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import {MongooseModule} from '@nestjs/mongoose';
import { CONNECTION_STRING } from './constants';

@Module({
  imports: [CoursesModule, 
    MongooseModule.forRoot(CONNECTION_STRING),],
  controllers: [],
  exports: [],
  providers: [],
})
export class AppModule {}
