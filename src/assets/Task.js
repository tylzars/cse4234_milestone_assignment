import { v4 as idgen } from 'uuid';

export class Task {
   constructor(
      taskName, taskTopic, dueDate, taskUrgency, taskNotes
   ) {
      this.taskID = idgen();
      this.name = taskName;
      this.topic = taskTopic;
      this.dueDate = dueDate;
      this.priority = taskUrgency;
      this.description = taskNotes;
      this.status = false;
   }

}
