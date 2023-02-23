export interface ITask {
    id: string;
    title: string;
    description: string;
    status: TasksStatus

}

export enum TasksStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    CLOSE = "CLOSE"
}