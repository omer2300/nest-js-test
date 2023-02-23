import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { title } from 'process';
import { createTaskDto } from './dto/craete-task.dto';
import { ITask } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): ITask[] {
        return this.tasksService.getAllTasks()
    }
    @Post()
    createTask(@Body() createTaskDto: createTaskDto): ITask {

        return this.tasksService.createTask(createTaskDto)
    }
    @Get("/:id")
    getTaskById(@Param("id") id: string) {
        return this.tasksService.getTaskById(id)
    }
    @Delete()
    deleteTask(id: string): void {
        this.tasksService.deleteTask(id)
    }

}
