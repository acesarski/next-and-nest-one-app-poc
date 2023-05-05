import { Module } from '@nestjs/common';
import {TasksService} from "@lib/tasks/application";

@Module({
  imports: [],
  controllers: [],
  providers: [TasksService],
  exports: [],
})
export class TasksModule {}
