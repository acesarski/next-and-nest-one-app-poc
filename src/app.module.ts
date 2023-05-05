import { Module } from '@nestjs/common';
import {TasksModule} from "@lib/tasks/tasks.module";

@Module({
  imports: [
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
