'use server';

import {NestFactory} from "@nestjs/core";
import {AppModule} from "@lib/app.module";
import {TasksService} from "@lib/tasks/application";
import {Logger} from "@nestjs/common";

export const loadTasks = async (withLogger: true) => {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const tasksService = appContext.get(TasksService);

  if (withLogger) {
    Logger.log('Loading tasks...', 'Tasks');
  }

  return tasksService.getTasks();
}