import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface ITaskForm {
    taskForm: IStyle
    labelForm: IStyle
    buttonContainer: IStyle
    formButton: IStyle
    addButton: IStyle
    cancelButton: IStyle
};

const TaskFormStyle: IProcessedStyleSet<ITaskForm> = mergeStyleSets({
    taskForm: {
        width: "90%",
        maxWidth: "300px",
        backgroundColor: "#FAFAFA",
        padding: "30px 40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    labelForm: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
        width: "100%",
        color: "#1E1E1F",
        marginBottom: "27px",
    },
    buttonContainer: {
        marginTop: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    formButton: {
        display: "inline-block",
        fontSize: "20px",
        color: "#202329",
        fontWeight: 400,
        width: "120px",
        height: "48px",
        borderRadius: "3px",
        border: "none",
    },
    addButton: {
        fontWeight: 400,
        borderRadius: "3px",
        border: "none",
        background: "#747264",
        boxShadow: "0 5px 25px rgba(224, 204, 190, 0.5)",
        selectors: {
            "&:hover": {
                background: "rgba(116, 114, 100, 0.8)",
                border: "none"
            }
        }
    },
    cancelButton: {
        fontWeight: 400,
        borderRadius: "3px",
        border: "none",
    }
});

export default TaskFormStyle;