import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

declare const module : any;
async function bootstrap(){
const app = await NestFactory.create(AppModule);
//register validations
app.useGlobalPipes(new ValidationPipe())
//app runs on this port
await app.listen(9000);
//set global prefix for apis
app.setGlobalPrefix("api");
//hot module reload
if(module.hot){
module.hot.accept();
module.hot.dispose(()=>app.close());
}
}

bootstrap();