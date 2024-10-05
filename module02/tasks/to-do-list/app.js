class Task {
    constructor(year, month, day, type, description) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.type = type;
        this.description = description;
    }

    validateData() {
        for (let key in this) {
            if (this[key] === undefined || this[key] === "") {
                console.error(`The field ${key} is required.`);
                return false;
            }
        }
        return true;
    }
}

class Database {
    constructor() {
        this.initDatabase();
    }

    initDatabase() {
        const id = localStorage.getItem('id');
        if (id === null) {
            localStorage.setItem('id', '0');
        }
    }

    loadTasks() {
        const tasks = [];
        const id = localStorage.getItem('id');

        for (let i = 1; i <= id; i++) {
            try {
                const task = JSON.parse(localStorage.getItem(i));
                if (task !== null) {
                    task.id = i;
                    tasks.push(task);
                }
            } catch (e) {
                console.error(`Error loading task with id ${i}:`, e);
            }
        }
        return tasks;
    }

    createTask(task) {
        const id = this.getNextId();
        localStorage.setItem(id, JSON.stringify(task));
        localStorage.setItem('id', id.toString());
    }

    removeTask(id) {
        localStorage.removeItem(id);
    }

    searchTasks(searchTask) {
        const tasks = this.loadTasks();

        return tasks.filter(task => {
            return (searchTask.year ? task.year === searchTask.year : true) &&
                (searchTask.month ? task.month === searchTask.month : true) &&
                (searchTask.day ? task.day === searchTask.day : true) &&
                (searchTask.type ? task.type === searchTask.type : true) &&
                (searchTask.description ? task.description === searchTask.description : true);
        });
    }

    getNextId() {
        const currentId = localStorage.getItem('id');
        return parseInt(currentId) + 1;
    }
}

const database = new Database();

function registerTask() {
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;

    const task = new Task(year, month, day, type, description);

    if (task.validateData()) {
        database.createTask(task);
        alert('Task registered successfully!');
        resetForm();
    } else {
        alert('Please fill in all fields.');
    }
}

function loadTasks(tasks = database.loadTasks()) {
    const listTasks = document.getElementById('listTasks');
    listTasks.innerHTML = '';

    tasks.forEach((t) => {
        const row = listTasks.insertRow();

        row.insertCell(0).innerHTML = `${t.day}/${t.month}/${t.year}`;

        row.insertCell(1).innerHTML = getTaskTypeName(t.type);
        row.insertCell(2).innerHTML = t.description;

        const btn = document.createElement('button');
        btn.className = 'btn btn-danger';
        btn.id = t.id;
        btn.innerHTML = 'Delete';
        btn.onclick = () => {
            if (confirm('Are you sure you want to delete this task?')) {
                database.removeTask(t.id);
                loadTasks();
            }
        };

        row.insertCell(3).append(btn);
    });
}

function getTaskTypeName(type) {
    switch (type) {
        case '1':
            return 'Studies';
        case '2':
            return 'Work';
        case '3':
            return 'Home';
        case '4':
            return 'Health';
        case '5':
            return 'Family';
        default:
            return 'Unknown';
    }
}

function searchTasks() {
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;

    const task = new Task(year, month, day, type, description);
    const tasks = database.searchTasks(task);

    loadTasks(tasks);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.body.contains(document.getElementById('listTasks'))) {
        loadTasks();
    }
});