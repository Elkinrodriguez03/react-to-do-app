import React, { useState } from 'react';
import Strings from '../../Utils/String.json';
import { Pivot, PivotItem, Stack } from '@fluentui/react';
import { PivotKeysEnum } from '../../Utils/Types';
import TaskList from '../List/TaskList';
import HomeStyle from './Home.style';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { TodoContext } from '../../Provider/To-do.provider';
import CreateTaskButton from '../CreateButton/CreateTaskButton';
import Modal from '../Modal';
import TaskForm from '../TaskForm/TaskForm';
import CompletedTaskList from '../List/CompletedTaskList';

initializeIcons();

const Home = () => {
    const { openModal, setOpenModal } = React.useContext(TodoContext);
    const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks);
    const [editTaskId, setEditTaskId] = useState<string | null>(null);

    const editTask = (id: string) => {
        setEditTaskId(id)
    }

    console.log('Component Re-rendered');

    return (
        <Stack className={HomeStyle.todoContainer}>
            <header className={HomeStyle.headerStyle}>
                <h2>{Strings.header}</h2>
            </header>
            <Stack>
                <Pivot
                    className={HomeStyle.tabsContainer}
                    selectedKey={String(selectedKey)}
                    styles={{ root: HomeStyle.pivotRoot }}
                    onLinkClick={(item?: PivotItem) => {
                        if (item?.props.itemKey !== PivotKeysEnum.TasksForm) {
                            setEditTaskId(null);
                        }
                        setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks);
                    }}
                >
                    <PivotItem
                        headerText={Strings.pivots.tasksTab}
                        itemKey={PivotKeysEnum.Tasks}
                    >
                        <Stack className={HomeStyle.contentContainer}>
                            <TaskList setEditTask={editTask} />
                        </Stack>
                    </PivotItem>
                    <PivotItem
                        headerText={Strings.pivots.completedTaskTab}
                        itemKey={PivotKeysEnum.Completed}
                    >
                        <Stack className={HomeStyle.contentContainer}>
                            <CompletedTaskList />
                        </Stack>
                    </PivotItem>
                </Pivot>
                <CreateTaskButton setOpenModal={setOpenModal} />
                {openModal && (
                    <Modal>
                        <TaskForm editTaskId={editTaskId} />
                    </Modal>
                )}
            </Stack>
        </Stack>
    );
};

export default Home;
