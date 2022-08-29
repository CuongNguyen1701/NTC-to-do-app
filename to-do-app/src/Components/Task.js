import React from "react";
import DeleteTask from "./DeleteTask";
import ToggleReminder from "./ToggleReminder";
import { Link } from "react-router-dom";

export default function Task({ task, onDel, onToggleReminder }) {
	return (
		<div className={`task ${task.reminder ? "reminder" : ""}`}>
			<Link to={`${task.id}`}>
				<h3>{task.text}</h3>
			</Link>
			<h4>{task.time}</h4>
			<ToggleReminder
				hasReminder={task.reminder}
				onToggleReminder={onToggleReminder}
				taskID={task.id}
			/>
			<DeleteTask onDel={onDel} task={task} />
		</div>
	);
}
