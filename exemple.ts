class Task {
    title: string;
    description: string;
    dueDate: Date;
    completed: boolean;

    constructor(title: string, description: string, dueDate: Date) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }

    markAsCompleted() {
        this.completed = true;
    }
}

class TaskManager {
    private tasks: Task[] = [];

    addTask(task: Task) {
        this.tasks.push(task);
    }

    listTasks(filter?: 'all' | 'pending' | 'completed') {
        const filteredTasks = this.tasks.filter(task => {
            if (filter === 'pending') {
                return !task.completed;
            } else if (filter === 'completed') {
                return task.completed;
            }
            return true; // Show all
        });
        return filteredTasks;
    }

    markTaskAsCompleted(index: number) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].markAsCompleted();
        } else {
            console.log('Invalid index.');
        }
    }

    removeTask(index: number) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        } else {
            console.log('Invalid index.');
        }
    }
}

// Usage example:
const taskManager = new TaskManager();

const task1 = new Task('Do the shopping', 'Milk, eggs, fruits', new Date(2024, 11, 25));
const task2 = new Task('Study TypeScript', 'Solve exercises', new Date(2024, 11, 28));

taskManager.addTask(task1);
taskManager.addTask(task2);

console.log('Pending tasks:');
console.log(taskManager.listTasks('pending'));

taskManager.markTaskAsCompleted(0);

console.log('All tasks:');
console.log(taskManager.listTasks());
