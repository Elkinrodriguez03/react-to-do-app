import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface CreateTask {
    createButton: IStyle
};

const CreateButtonStyle: IProcessedStyleSet<CreateTask> = mergeStyleSets({
    createButton: {
        backgroundColor: "#E0CCBE",
        boxShadow: "rgba(224, 204, 190, 1) 0px 5px 15px",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        position: "fixed",
        bottom: "24px",
        right: "24px",
        fontSize: "50px",
        fontWeight: "bold",
        color: "#FAFAFA",
        display: "flex",
        justifyContent: "center",
        height: "67px",
        width: "67px",
        zIndex: 1,

        transform: "rotate(0)",
        transition: ".3s ease",
        selectors: {
            "&:hover": { transform: "rotate(365deg)" }
        }
    }
});

export default CreateButtonStyle;