import React, { createContext, useReducer, useState } from 'react';
import {
    ActionTypeEnum,
    IAddAction,
    ICompletedAction,
    IDeleteAction,
    IReducerAction,
    ITask,
    ITodoState,
    IUpdateAction,
    TodoContextType,
} from '../Utils/Types';
import { clone } from '../Utils/utility';

export const TodoContext = createContext<TodoContextType>({
    activeTasks: [],
    dispatch: (state) => !state,
    openModal: false,
    setOpenModal: (openModal) => !openModal,
    completedTasks: [],
});

type Props = {
    children: React.ReactNode;
};

const addTaskAction = (state: ITodoState, action: IAddAction) => {
    const { data } = action;
    data.id = new Date().toJSON();

    return [action.data, ...state.activeTasks];
};

const deleteTaskAction = (state: ITodoState, action: IDeleteAction) => {
    const activeTasks = clone(state.activeTasks);
    const filteredData = activeTasks.filter(
        (task: ITask) => task.id !== action.data.id,
    );

    return filteredData;
};

const deleteCompletedTaskAction = (state: ITodoState, action: IDeleteAction) => {
    const completedTasks = clone(state.activeTasks);
    const filteredData = completedTasks.filter(
        (task: ITask) => task.id !== action.data.id,
    );

    return filteredData;
};

const updateTaskAction = (state: ITodoState, action: IUpdateAction) => {
    const cloneActiveTasks: ITask[] = clone(state.activeTasks);
    const index = cloneActiveTasks.findIndex((x) => x.id === action.data.id);

    if (index >= 0) {
        cloneActiveTasks[index] = action.data;
    }

    return cloneActiveTasks;
} 

const completedTaskAction = (state: ITodoState, action: ICompletedAction) => {
    const activeTasks: ITask[] = clone(state.activeTasks);
    const completedTaskData = activeTasks.find((task) => task.id === action.data.id);
    const filteredData = activeTasks.filter((task) => task.id !== action.data.id);

    const completedTask = completedTaskData ? [completedTaskData, ...state.completedTasks] : [ ...state.completedTasks];

    return {
        activeTasks: filteredData,
        completedTask,
    };
}

const reducer = (state: ITodoState, action: IReducerAction) => {
    switch (action.type) {
        case ActionTypeEnum.Add: {
            return { ...state, activeTasks: addTaskAction(state, action) };
        };
        case ActionTypeEnum.Delete: {
            return { ...state, activeTasks: deleteTaskAction(state, action) };
        };
        case ActionTypeEnum.DeleteCompletedTask: {
            return { ...state, completedTasks: deleteCompletedTaskAction(state, action) };
        };
        case ActionTypeEnum.Update: {
            return { ...state, activeTasks: updateTaskAction(state, action) };
        };
        case ActionTypeEnum.Completed: {
            const data = completedTaskAction(state, action);
            return {
                ...state, 
                activeTasks: data.activeTasks,
                completedTasks: data.completedTask, 
            };
        };
    }
    return { ...state };
};

const TodoProvider = ({ children }: Props) => {
    const [openModal, setOpenModal] = useState(false);
    console.log(openModal);

    const tasks: ITask[] = [];

    const data: ITodoState = { activeTasks: tasks, completedTasks: [] };
    const [state, dispatch] = useReducer(reducer, data);

    return (
        <TodoContext.Provider
            value={{
                activeTasks: state.activeTasks,
                dispatch,
                openModal,
                setOpenModal,
                completedTasks: state.completedTasks,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
