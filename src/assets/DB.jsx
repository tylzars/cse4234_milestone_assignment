import { useState } from "react";
import { Task } from "./Task";
import { UserAuth } from '../context/AuthContext'
import userLists from "./userLists.json"

export function DB() {
   const {user} = UserAuth();
   const {tasks, setTasks} = useState([]);

   function getTasks() {
      let key;

      if (user === null || !userLists.hasOwnProperty(user.displayName)) {
         key = "default";
      } else {
         key = user.displayName;
      }


      let taskList = [];
      for (var task of userLists[key]) {
          taskList.push(
            new Task(task.name, task.topic, new Date(task.dueDate).toLocaleString(), task.priority, task.description)
          )
      }

      // setTasks(taskList);

      return taskList;
   }

   function getTask(taskID) {
      for (const task of tasks) {
         if (task.taskID === taskID) {
            return task;
         }
      }
      return ReferenceError("Could not find task with ID: " + taskID);
   }

   return getTasks();
}