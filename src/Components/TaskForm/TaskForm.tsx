import React, { useContext, useEffect, useState } from "react";
import { DefaultButton, MessageBar, MessageBarType, PrimaryButton, Stack, TextField } from "@fluentui/react";
import { TodoContext } from "Provider/To-do.provider";
import TaskFormStyle from "./Form.style";
import useInput from "./useInput";
import { ActionTypeEnum, ITask } from "Utils/Types";
import TodoString from "../../Utils/String.json";

type Props = {
    editTaskId: string | null
}

const TaskForm = ({ editTaskId }: Props) => {
    const { openModal, setOpenModal } = React.useContext(TodoContext);
    const { activeTasks, dispatch } = useContext(TodoContext);

    const title = useInput("");
    const description = useInput("");

    const addTaskAction = () => {
        const data: ITask = {
            id: "",
            title: title.value, description: description.value
        };
        dispatch({ type: ActionTypeEnum.Add, data });
        setShowMessage({ type: MessageBarType.success, message: "Task Added!" });
        title.set("");
        description.set("");
    };

    useEffect(() => {
        if (editTaskId) {
            const taskData = activeTasks.find(task => task.id === editTaskId);
            title.set(taskData?.title || "");
            description.set(taskData?.description || "");
        }
    }, [editTaskId]);


    const [showMessage, setShowMessage] = useState<{ type: MessageBarType, message: string }>({ type: MessageBarType.success, message: "" });

    useEffect(() => {
        if (showMessage.message) {
            setTimeout(() => {
                setShowMessage({ type: MessageBarType.success, message: "" });
            }, 3000);
        }
    }, [showMessage.message])

    const updateTaskAction = () => {
        const taskData = activeTasks.find(task => task.id === editTaskId);

        if (taskData) {
            const data: ITask = {
                id: taskData.id,
                title: title.value,
                description: description.value,
            };

            dispatch({ type: ActionTypeEnum.Update, data })
            setShowMessage({ type: MessageBarType.success, message: "Task Updated!" });
        } else {
            setShowMessage({ type: MessageBarType.success, message: "Error while updating task!" });
        };
    };

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        editTaskId ? updateTaskAction() : addTaskAction();
        setOpenModal((!openModal));
    }

    const onCancel = () => {
        setOpenModal(false);
        console.log(openModal);

    }

    return (
        <form onSubmit={onFormSubmit} className={TaskFormStyle.taskForm}>
            <TextField className={TaskFormStyle.labelForm} label="Title" required {...title} />
            <TextField className={TaskFormStyle.labelForm} label="Description" multiline rows={4} {...description} />
            <Stack>
                {showMessage.message && (
                    <MessageBar messageBarType={MessageBarType.success}>
                        {showMessage.message}
                    </MessageBar>
                )}
            </Stack>
            <Stack horizontal className={TaskFormStyle.buttonContainer}>
                <Stack style={{ width: "50%" }}>
                    <DefaultButton className={TaskFormStyle.cancelButton} text="Cancel" onClick={onCancel} />
                </Stack>
                <Stack>
                    <PrimaryButton
                        type="submit"
                        className={TaskFormStyle.addButton}
                        text={editTaskId ? TodoString.updateTaskBtn : TodoString.addTaskBtn}
                    />
                </Stack>
            </Stack>
        </form>
    );
};

export default TaskForm;