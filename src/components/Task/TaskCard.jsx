import { Draggable } from "@hello-pangea/dnd";
import deleteBin from "../../assets/bin.svg";
import React from "react";
import { deleteTask } from "../../service/operations/taskApi";
import { fetchingTask } from "../../service/operations/authApi";

function TaskCard({ data, index, token, setTaskData }) {
  return (
    <Draggable draggableId={data._id} key={data._id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="border border-gray-200 flex justify-between rounded-lg p-4 w-full leading-7 break-all bg-white shadow-xl"
        >
          <li className="list-none" key={data._id}>
            {data.title}
          </li>
          <img
            src={deleteBin}
            alt="bin"
            width={20}
            onClick={async () => {
              await deleteTask({ taskId: data._id }, token);
              const response = await fetchingTask(token);
              setTaskData(response.tasks);
            }}
          />
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
