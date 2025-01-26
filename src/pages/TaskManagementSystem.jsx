import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import React, { useEffect, useState } from "react";
import { fetchingTask } from "../service/operations/authApi";
import { creatingTask, updateTasks } from "../service/operations/taskApi";
import { useNavigate } from "react-router-dom";
import TaskCard from "../components/Task/TaskCard";
import Login from "../components/Auth/Login";

function TaskManagementSystem() {
  const token = localStorage.getItem("token");
  const [taskData, setTaskData] = useState([]);
  const [todoText, setTodoText] = useState("");
  const navigate = useNavigate();

  const fetchedData = async () => {
    const response = await fetchingTask(token);
    setTaskData(response.tasks);
    setTodoText("");
  };

  useEffect(() => {
    fetchedData();
  }, []);

  const onDragEnd = async (result) => {
    const { source, destination } = result;

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    const updateTask = [...taskData];

    const [movedTask] = updateTask.splice(source.index, 1);

    movedTask.status = destination.droppableId;

    await updateTasks(result.draggableId, destination.droppableId, token);

    updateTask.splice(destination.index, 0, movedTask);

    setTaskData(updateTask);
  };

  const createTaskHandler = async () => {
    await creatingTask({ title: todoText }, token, navigate);
    await fetchedData();
  };

  if (!token) {
    return <Login />;
  }

  return (
    <div>
      <div className="flex gap-4 items-center justify-center mt-4">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={todoText}
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={createTaskHandler} className="btn btn-info">
          Create Task
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 min-h-screen gap-4 p-4">
          <div className="col-span-1">
            <h1 className="font-bold text-2xl mb-4">Pending</h1>
            <Droppable droppableId="Pending">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`border rounded-xl p-4 flex flex-col items-center gap-4 bg-red-200 ${
                    snapshot.isDraggingOver ? "bg-red-300" : ""
                  }`}
                >
                  {taskData.map((data, index) => {
                    if (data.status === "Pending") {
                      return (
                        <TaskCard
                          data={data}
                          index={index}
                          key={data._id}
                          token={token}
                          setTaskData={setTaskData}
                        />
                      );
                    }
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className="col-span-1">
            <h1 className="font-bold text-2xl mb-4">Completed</h1>
            <Droppable droppableId="Completed">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`border p-4 rounded-xl flex flex-col items-center gap-4 bg-yellow-200 ${
                    snapshot.isDraggingOver ? "bg-yellow-300" : ""
                  }`}
                >
                  {taskData.map((data, index) => {
                    if (data.status === "Completed") {
                      return (
                        <TaskCard
                          data={data}
                          index={index}
                          key={data._id}
                          token={token}
                          setTaskData={setTaskData}
                        />
                      );
                    }
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className="col-span-1">
            <h1 className="font-bold text-2xl mb-4">Done</h1>
            <Droppable droppableId="Done">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`border rounded-xl p-4 flex flex-col items-center gap-4 bg-green-200 ${
                    snapshot.isDraggingOver ? "bg-green-300" : ""
                  }`}
                >
                  {taskData.map((data, index) => {
                    if (data.status === "Done") {
                      return (
                        <TaskCard
                          data={data}
                          index={index}
                          key={data._id}
                          token={token}
                          setTaskData={setTaskData}
                        />
                      );
                    }
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default TaskManagementSystem;
