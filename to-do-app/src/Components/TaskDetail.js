import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Task from "./Task";

function TaskDetail({ tasks, onDel, onToggleReminder }) {
	const navigate = useNavigate();
	const { id } = useParams();
	let filteredTasks = tasks.filter(task => {
		return task.id === parseInt(id);
	});
	let task = filteredTasks[0];
	if (!task) navigate("/");
	return (
		<>
			<div>DETAIL</div>
			<Task
				key={task.id}
				task={task}
				onDel={onDel}
				onToggleReminder={onToggleReminder}
			/>
			<div>Detail here</div>
			<Link to="/"> Return</Link>
		</>
	);
}

export default TaskDetail;
