import {Injectable} from "@nestjs/common";

@Injectable()
export class TasksService {
  public async getTasks() {
    return [
      { name: 'Test A', status: 'new' },
      { name: 'Test B', status: 'new' },
    ]
  }
}