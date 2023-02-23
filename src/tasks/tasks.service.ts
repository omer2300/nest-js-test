import { Injectable } from '@nestjs/common';
import { ITask, TasksStatus } from './task.model';
import { v4 as uuid } from "uuid"
import { createTaskDto } from './dto/craete-task.dto';

@Injectable()
export class TasksService {
    private tasks: ITask[] = []

    getAllTasks(): ITask[] {
        return this.tasks
    }

    createTask(createTaskDto: createTaskDto): ITask {
        const { title, description } = createTaskDto
        const task: ITask = {
            id: uuid(),
            description,
            title,
            status: TasksStatus.OPEN
        }
        this.tasks.push(task)

        return task
    }


    getTaskById(id: string): ITask {
        return this.tasks.find(task => task.id === id)
    }

    deleteTask(id: string): void {
        this.tasks.filter(task => task.id !== id)
    }
}
