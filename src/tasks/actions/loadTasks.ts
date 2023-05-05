'use server';

import {NestFactory} from "@nestjs/core";
import {AppModule} from "@lib/app.module";
import {TasksService} from "@lib/tasks/application";

export const loadTasks = async () => {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const tasksService = appContext.get(TasksService);

  return tasksService.getTasks();
}