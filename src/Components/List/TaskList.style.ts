import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface ItaskListStyle {
    taskItem: IStyle
    iconStyle: IStyle
    disabled: IStyle
};

const TaskListStyle: IProcessedStyleSet<ItaskListStyle> = mergeStyleSets({
    taskItem: {
        display: "flex",
        position: "relative",
        padding: "10px 20px 10px 10px",
        borderRadius: "3px",
        margin: 10,
        alignItems: "center",
        backgroundColor: "#ffffff",
        justifyContent: "center",
        selectors: {
            "&:hover": { background: "#EEEDEB"}
        },
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    },
    iconStyle: {
        fontSize: 20,
        margin: "0 3px",
        selectors: {
            "&:hover": {cursor: "pointer"},
        },
        '@media screen and (max-width: 800px)': {
                fontSize: 15,
        }
    },
    disabled: {
        color: "gray",
        fontSize: 20,
        margin: "0 3px",
        selectors: {
            "&:hover": { cursor: "defaul" },
        },

        '@media screen and (max-width: 800px)': {
            fontSize: 15,
    }
    }
});


export default TaskListStyle;