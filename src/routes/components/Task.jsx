import React, { Component } from "react";

class Task extends Component {
   constructor(
      taskName, taskTopic, dueDate, taskUrgency, taskNotes
   ) {
      this.name = taskName;
      this.topic = taskTopic;
      this.dueDate = dueDate;
      this.priority = taskUrgency;
      this.description = taskNotes;
      this.status = false;

      // These properties need to be implemented for duplicate prevention in DB
      this.taskID;
      this.topicID;
   }

   render() {
      return (
         <div>
            <p>Task: {this.taskName} Topic: {this.taskTopic}</p>
            <p>Urgency: {this.taskUrgency} Due: {this.dueDate}</p>
            <p>Notes: <br/>{this.description}</p>
         </div>
      );
   };
}

export default Task;