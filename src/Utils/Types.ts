import { Dispatch } from "react";

export enum PivotKeysEnum {
    Tasks = "Tasks",
    TasksForm = "Task-Form",
    Completed = "Completed-Tasks",
}

export interface ITask {
    id: string;
    title: string;
    description?: string;
}

export interface TodoContextType {
    activeTasks: ITask[];
    dispatch: Dispatch<any>;
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    completedTasks: ITask[];
};

export interface ITodoState {
    activeTasks: ITask[];
    completedTasks: ITask[];
}

export enum ActionTypeEnum {
    Add,
    Delete,
    Update,
    Completed,
    DeleteCompletedTask,
}

export type IReducerAction = IAddAction | IDeleteAction | IUpdateAction  | ICompletedAction;

export interface IAddAction {
    type: ActionTypeEnum.Add;
    data: ITask;
}

export interface IDeleteAction {
    type: ActionTypeEnum.Delete | ActionTypeEnum.DeleteCompletedTask;
    data: {id: string};
}

export interface IUpdateAction {
    type: ActionTypeEnum.Update;
    data: ITask;
}

export interface ICompletedAction {
    type: ActionTypeEnum.Completed;
    data: { id: string }
}