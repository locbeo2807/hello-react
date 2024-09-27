import React, { useState } from "react";
import ToDo from "../components/ToDo";

function ToDoList() {
    const [toDoList, setTodoList] = useState([]);
    const [plan, setPlan] = useState('');

    const handleInput = (e) => {
        setPlan(e.target.value);
    }

    const submitToDo = () => {
        if (plan.trim()) {
            const object = {
                id: new Date().getTime(),
                content: plan,
                status_id: 1,
                created_at: new Date().getTime(),
            }
            setTodoList([...toDoList, object]);
            setPlan('');
        }
    }

    const updateTaskStatus = (id, statusId) => {
        const updatedTasks = [...toDoList];
        const taskIndex = updatedTasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            const updatedTask = { ...updatedTasks[taskIndex], status_id: statusId };
            updatedTasks.splice(taskIndex, 1, updatedTask);
            setTodoList(updatedTasks);
        }
    }

    const filterTasks = (statusId) => {
        return toDoList.filter(task => task.status_id === statusId);
    }

   const renderListToDo = (tasks) => {
        return tasks.map(task => {
            return <ToDo key={task.id} task={task} updateTaskStatus={updateTaskStatus} />
        });
    };

    const newTasks = filterTasks(1);
    const completedTasks = filterTasks(2);
    const canceledTasks = filterTasks(3);

    return (
        <div className="relative py-2">
            <div className="flex justify-center gap-1">
                <input
                    onChange={handleInput}
                    value={plan}
                    type="search"
                    id="default-search"
                    className="block w-[500px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bạn có kế hoạch gì..."
                    required
                />
                <button
                    onClick={submitToDo}
                    type="submit"
                    className="bg-orange-500 text-white px-2 rounded-md"
                >
                    Lưu
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4 py-2">
                <p className="bg-blue-500 rounded-md text-white text-center py-2">Mới</p>
                <p className="bg-green-500 rounded-md text-white text-center py-2">Đã hoàn thành</p>
                <p className="bg-red-500 rounded-md text-white text-center py-2">Đã hủy</p>
            </div>
            <div className="grid grid-cols-3 gap-4 py-2">
                <div>{renderListToDo(newTasks)}</div>
                <div>{renderListToDo(completedTasks)}</div>
                <div>{renderListToDo(canceledTasks)}</div>
            </div>
        </div>
    );
}

export default ToDoList;
