import React, { useContext, useEffect } from "react";
import CreateButtonStyle from "./CreateTaskButton.style";
import { TodoContext } from "Provider/To-do.provider";

interface CreateTaskButtonProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTaskButton: React.FC<CreateTaskButtonProps> = () => {
    const { openModal, setOpenModal } = useContext(TodoContext);

    return (
        <button 
            className={CreateButtonStyle.createButton}
            onClick={() => {
                    setOpenModal(!openModal);                   
                }
            }
        >
            +
        </button>
    );
};

export default CreateTaskButton;