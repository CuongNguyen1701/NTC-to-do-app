import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import About from "./Components/About";
import TaskDetail from "./Components/TaskDetail";
function App() {
	const [listTasks, setListTasks] = useState([
		{
			id: 1,
			text: "Training",
			time: "20/07/2022 10:30",
			reminder: true,
		},
		{
			id: 2,
			text: "Task2",
			time: "20/07/2022 19:30",
			reminder: true,
		},
		{
			id: 3,
			text: "Task3",
			time: "20/06/2022 19:30",
			reminder: false,
		},
		{
			id: 4,
			text: "Task4",
			time: "20/07/2022 16:00",
			reminder: true,
		},
	]);

	//Add Task
	const addTask = task => {
		const id = Math.floor(Math.random() * 1000) + 1;
		const newtask = { id, ...task };
		setListTasks([...listTasks, newtask]);
	};

	//Remove Task
	const deleteTask = task => {
		const newList = listTasks.filter(el => el.id !== task.id);
		setListTasks(newList);
	};

	//Toggle Reminder
	const toggleReminder = taskID => {
		let newList = [...listTasks];
		for (let task of newList) {
			if (task.id === taskID) {
				task.reminder = !task.reminder;
			}
		}
		setListTasks(newList);
	};

	return (
		<BrowserRouter>
			<div className="container">
				<Header title="To do App" />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<AddTask onAdd={addTask} />
								<Tasks
									tasks={listTasks}
									onDel={deleteTask}
									onToggleReminder={toggleReminder}
								/>
								<Link to="/about">About page</Link>
							</>
						}
					></Route>
					<Route path="/about" element={<About />}></Route>
					<Route
						path="/:id"
						element={
							<TaskDetail
								tasks={listTasks}
								onDel={deleteTask}
								onToggleReminder={toggleReminder}
							/>
						}
					></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
