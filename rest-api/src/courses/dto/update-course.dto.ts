import { CoursesDto } from "./courses.dto";
import {PartialType} from "@nestjs/mapped-types"

export class UpdateCourseDto extends PartialType(CoursesDto){}