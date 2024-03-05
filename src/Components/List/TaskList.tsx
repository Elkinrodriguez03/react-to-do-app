import React, { useContext } from "react";
import TaskListStyle from "./TaskList.style";
import { Checkbox, FontIcon, MessageBar, Stack } from "@fluentui/react";
import { ActionTypeEnum, ITask } from "Utils/Types";
import { TodoContext } from "Provider/To-do.provider";
import TodoString from '../../Utils/String.json';
import TaskDescription from "./TaskDescription";

type Props = {
    setEditTask: (taskId: string) => void
}

const TaskList = ({ setEditTask }: Props) => {
    const { activeTasks, dispatch } = useContext(TodoContext);

    const onTaskDelete = (id: string) => {
        if (window.confirm(TodoString.confirmDelete)) {
            dispatch({ type: ActionTypeEnum.Delete, data: { id } })
        }
    }
    const { openModal, setOpenModal } = useContext(TodoContext);

    const checkboxHandler = (id: string) => {
        dispatch({ type: ActionTypeEnum.Completed, data: { id } });
    };

    const onRenderCell = (task: ITask) => {
        return (
            <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
                <Stack horizontal style={{ width: "80%" }}>
                    <Checkbox onChange={() => {
                        checkboxHandler(task.id)
                    }} />
                    {task.title}
                </Stack>
                <Stack horizontal style={{ width: "20%", justifyContent: "end" }}>
                    <TaskDescription task={task} />
                    <FontIcon
                        iconName="Edit" className={TaskListStyle.iconStyle}
                        onClick={() => {
                            setOpenModal(!openModal)
                            setEditTask(task.id)
                        }}
                    />
                    <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} onClick={() => onTaskDelete(task.id)} />
                </Stack>
            </Stack>
        );
    };

    return (
        <div>
            {activeTasks.length ? (
                activeTasks.map(onRenderCell)
            ) : (
                <MessageBar>No Records</MessageBar>
            )}
        </div>
    )

}

export default TaskList;