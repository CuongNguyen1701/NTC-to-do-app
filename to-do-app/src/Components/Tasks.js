import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDel, onToggleReminder }) => {
	return (
		<div>
			{tasks.map(task => (
					<Task
						key={task.id}
						task={task}
						onDel={onDel}
						onToggleReminder={onToggleReminder}
					/>
			))}
		</div>
	);
};

export default Tasks;
