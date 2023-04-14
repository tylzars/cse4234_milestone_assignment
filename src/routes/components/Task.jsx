import React, { Component } from "react";

class Task extends Component {
   constructor(
      taskName, taskTopic, dueDate, taskUrgency, taskNotes
   ) {
      super();
      this.name = taskName;
      this.topic = taskTopic;
      this.dueDate = dueDate;
      this.priority = taskUrgency;
      this.description = taskNotes;
      this.status = false;

      // These properties need to be implemented for duplicate prevention in DB
      // this.taskID;
      // this.topicID;
   }

   render() {
      return (
         <div>
            <p>Task: {this.name} Topic: {this.topic}</p>
            <p>Urgency: {this.priority} Due: {this.dueDate}</p>
            <p>Notes: <br/>{this.description}</p>
         </div>
      );
   };
}

export default Task;