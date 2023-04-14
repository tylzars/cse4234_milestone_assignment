import React, { Component } from "react";
import Task from "./Task";

class toDoList extends Component {
   constructor (
      userID,
      tasks = []
   ) {
      this.owner = userID;
      this.taskList = tasks;
   }

   render() {
      return(
         <div>
            <h2>{this.owner}'s To Do List</h2>
            <ul style={{listStyleType:"none"}}>
               {this.taskList.map((Task) => (<Task />))}
            </ul>
         </div>
      );
   };
}

export default toDoList;