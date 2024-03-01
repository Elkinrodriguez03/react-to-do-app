import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface IHomeStyle {
    todoContainer: IStyle;
    contentContainer: IStyle;
    headerStyle: IStyle;
    pivotRoot: IStyle;
    tabsContainer: IStyle;
}

const HomeStyle: IProcessedStyleSet<IHomeStyle> = mergeStyleSets({
    todoContainer: {
        width: "50%",
        height: "80%",
        position: "absolute",
        top: "50%",
        left: "50%",
        backgroundColor: "#EEEDEB",
        transform: "translate(-50%, -50%)",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        borderRadius: "30px"
    },
    contentContainer: {
        margin: 0,
        padding: "0 10px 30px 10px",
        overflow: "hidden",
        overflowY: "scroll",
        maxHeight: "370px"
        
    },
    headerStyle: {
        height: 80,
        backgroundColor: "#3C3633",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px"
    },
    tabsContainer: {
        position: "static",
    },
    pivotRoot: {
        display: "flex",
        justifyContent: "center",
    },
});

export default HomeStyle;