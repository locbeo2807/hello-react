import React from "react";

export default function ToDo({ task, updateTaskStatus }) {
    const getStatusStyles = (statusId) => {
        switch (statusId) {
            case 1:
                return "border-blue-500";
            case 2:
                return "border-green-500";
            case 3:
                return "border-red-500";
            default:
                return "";
        }
    };

    const getActionButton = (statusId) => (
        <>
            {statusId === 1 && (
                <button
                    onClick={() => updateTaskStatus(task.id, 2)}
                    className="text-green-500 hover:text-green-700"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                </button>
            )}
            {[1, 2].includes(statusId) && (
                <button
                    onClick={() => updateTaskStatus(task.id, 3)}
                    className="text-red-500 hover:text-red-700"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            )}
            {statusId === 3 && (
                <button
                    onClick={() => updateTaskStatus(task.id, 1)}
                    className="text-blue-500 hover:text-blue-700"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 12H5m7-7l-7 7 7 7"
                        ></path>
                    </svg>
                </button>
            )}
        </>
    );

    return (
        <div
            className={`bg-white p-4 rounded-lg shadow-md w-full max-w-md flex items-center justify-between border ${getStatusStyles(
                task.status_id
            )}`}
        >
            <div>
                <p className="text-xs text-gray-500 mb-1">
                    {new Date(task.created_at).toLocaleTimeString()}{" "}
                    {new Date(task.created_at).toLocaleDateString()}
                </p>
                <p className="text-lg text-gray-900">{task.content}</p>
            </div>
            <div className="flex items-center space-x-2">{getActionButton(task.status_id)}</div>
        </div>
    );
}
