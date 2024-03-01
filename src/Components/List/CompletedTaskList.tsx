import { Checkbox, FontIcon, MessageBar, Stack } from "@fluentui/react";
import { ActionTypeEnum, ITask } from "Utils/Types";
import React, { useContext } from "react";
import { TodoContext } from "Provider/To-do.provider";
import TaskListStyle from "./TaskList.style";
import TodoString from "../../Utils/String.json"

const CompletedTaskList = () => {
    const { completedTasks, dispatch } = useContext(TodoContext);

    const onTaskDelete = (id: string) => {
        if (window.confirm(TodoString.confirmDelete)) {
            dispatch({ type: ActionTypeEnum.DeleteCompletedTask, data : { id }});            
        }
    };

    const onRenderCell = (task: ITask) => {
        return (
            <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
                <Stack 
                    horizontal 
                    style={{ width: "85%" }}
                    className={TaskListStyle.disabled}
                >
                    <Checkbox checked />
                    <span>{task.title}</span>
                </Stack>
                <Stack 
                    horizontal 
                    style={{ width: "15%" }}
                    className={TaskListStyle.disabled}
                >
                    <FontIcon 
                        iconName="Info"
                        className={TaskListStyle.disabled}
                    />
                    <FontIcon 
                        iconName="Delete" 
                        className={TaskListStyle.iconStyle}
                        onClick={() => onTaskDelete(task.id)} 
                />
                </Stack>
            </Stack>
        );
    };

    return <div>
        {completedTasks.length ? (
                completedTasks.map(onRenderCell)
            ) : (
                <MessageBar>No Records</MessageBar>
            )}
    </div>
};

export default CompletedTaskList;