import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface IModalTask {
    modalTask: IStyle 
};

const ModalTaskStyle: IProcessedStyleSet<IModalTask> = mergeStyleSets({
    modalTask: {
        backgroundColor: "rgba(116, 114, 100, .5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FAFAFA",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})

export default ModalTaskStyle;