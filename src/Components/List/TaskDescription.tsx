import React from "react";
import { FontIcon, TeachingBubble, mergeStyles } from "@fluentui/react";
import TaskListStyle from "./TaskList.style";
import { ITask } from "Utils/Types";
import { useBoolean, useId } from "@fluentui/react-hooks";

type Props = {
    task: ITask
}

const TaskDescription = ({ task }: Props) => {
    const [teachingBubbleVisible, { toggle: toogleTeachingBubbleVisible }] = useBoolean(false);
    const buttonId = useId('targetButton');

    return (
        <>
            <FontIcon 
                id={buttonId} 
                iconName="Info" 
                className={
                    task.description ? TaskListStyle.iconStyle : mergeStyles(TaskListStyle.iconStyle, TaskListStyle.disabled)
                } 
                onClick={ task.description ? toogleTeachingBubbleVisible : (task) => !task}
            />
        {teachingBubbleVisible && (
            <TeachingBubble
                target={`#${buttonId}`}
                headline={task.title}
                onDismiss={toogleTeachingBubbleVisible}
            >
                {task.description}
            </TeachingBubble>
        )}
        </>
    )
};

export default TaskDescription;