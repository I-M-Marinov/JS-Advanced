class HomeRenovation {
    constructor(budget){
        this.budget = budget;
        this.tasks = [];
        this.completedTasks  = [];
    }

    addTask(description, cost, priority){
        class Task{
            constructor(description, cost, priority){
                this.description = description;
                this.cost = cost;
                this.priority = priority;
            }
        }

        let newTask = new Task(description, cost, priority);

        if(newTask.cost > this.budget){
            return `Not enough budget to add '${newTask.description}' task.`;
        } else {
            this.tasks.push(newTask);
            this.budget -= newTask.cost;
            return `The task '${newTask.description}' has been successfully added to the renovation plan.`
        }
    }

    markTaskAsCompleted(description){
        let existingTask = this.tasks.find(t => t.description === description);

        if(existingTask){
            this.tasks.shift(existingTask);
            this.completedTasks.push(existingTask);
            return `The task '${description}' has been successfully completed.`
        } else {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }
 
    }

    getPriorityTasksCount (minimalPriority){
        if(minimalPriority <= 0){
            return "The priority cannot be zero or negative.";
        }

        let matchingTasks = this.tasks.filter(t => t.priority >= minimalPriority);

        if(matchingTasks.length === 0){
            return `No tasks found with priority ${minimalPriority} or higher.`;
        } else {
            return `You have ${matchingTasks.length} tasks to prioritize.`;
        }
    }
    renovationSummary(){
        if(this.completedTasks.length === 0){
            throw new Error("No tasks have been completed yet!");
        }

        let result = [];
        result.push(`Budget left $${this.budget}.`);
        result.push(`You have completed ${this.completedTasks.length} tasks.`);
        result.push(`Pending tasks in the renovation plan:`);

        for (let task of this.tasks) {
            result.push(`${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`);
          }
          
          return result.join(`\n`);
    }
}
    

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.addTask("New Roof", 5000, 1)); 

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.markTaskAsCompleted("Paint walls")); 
// console.log(renovation.markTaskAsCompleted("Change doors")); 

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.markTaskAsCompleted("Paint walls")); 
// console.log(renovation.getPriorityTasksCount(1)); 

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.renovationSummary());


