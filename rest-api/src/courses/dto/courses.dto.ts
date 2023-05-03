import {IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator"

export class CoursesDto {

@IsString()
@IsNotEmpty()
    _id: string;
    @IsNumber()
    @IsNotEmpty()
    seqNo:number;
    @IsString()
    @IsNotEmpty()
    url:string;
    @IsString()
    @IsNotEmpty()
    iconUrl: string;
    @IsString()
    @IsNotEmpty()
    courseListIcon: string;
    @IsString()
    @IsNotEmpty()
    
    description: string;
    @IsString()
    @IsNotEmpty()
    longDescription?: string;
    @IsString()
    @IsNotEmpty()
    category: string;
    @IsNumber()
@IsNotEmpty()
    lessonsCount: number;
    @IsBoolean()
    promo: boolean;

}
