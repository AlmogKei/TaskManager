var MainTask = /** @class */ (function () {
    function MainTask(id, title, text, imageUrl) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.imageUrl = imageUrl;
        this.creationDate = new Date();
    }
    MainTask.prototype.alert = function () {
        // למשל, התראה כלשהי
        alert("תזכורת: " + this.title);
    };
    return MainTask;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TaskManager.prototype.deleteTask = function (id) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
    };
    return TaskManager;
}());
// HTML
document.addEventListener("DOMContentLoaded", function () {
    var taskManager = new TaskManager();
    var editMode = false; // ניתן לשנות ל-true כדי להציג את מצב העריכה
    // פונקציה להוספת פתק ל-HTML
    function addTaskToHTML(task) {
        var taskContainer = document.getElementById("task-container");
        var taskElement = document.createElement("div");
        taskElement.innerHTML = "\n        <div class=\"task\">\n          <img src=\"".concat(task.imageUrl, "\" alt=\"").concat(task.title, "\">\n          <h2>").concat(task.title, "</h2>\n          <p>").concat(task.text, "</p>\n          ").concat(editMode ? "<button onclick=\"deleteTask(".concat(task.id, ")\">X</button>") : '', "\n        </div>\n      ");
        taskContainer.appendChild(taskElement);
    }
    // פונקציה למחיקת פתק מה-HTML
    function deleteTask(id) {
        taskManager.deleteTask(id);
        var taskElement = document.getElementById("task-".concat(id));
        taskElement.remove();
    }
    // קוד להצגת הפתקים בעמוד
    taskManager.tasks.forEach(function (task) {
        addTaskToHTML(task);
    });
    // בדיקה והצגת התראות או הוספת פתקים נוספים בהתאם למצב
    if (!editMode) {
        taskManager.tasks.forEach(function (task) {
            task.alert();
        });
    }
    else {
        // הצגת דיב להוספת פתקים במצב עריכה
        var addTaskDiv = document.createElement("div");
        addTaskDiv.innerHTML = "\n        <div id=\"add-task\">\n          <input type=\"text\" placeholder=\"\u05DB\u05D5\u05EA\u05E8\u05EA\">\n          <input type=\"text\" placeholder=\"\u05D8\u05E7\u05E1\u05D8\">\n          <input type=\"text\" placeholder=\"\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05DC \u05EA\u05DE\u05D5\u05E0\u05D4\">\n          <button onclick=\"addTask()\">\u05D4\u05D5\u05E1\u05E3 \u05E4\u05EA\u05E7</button>\n        </div>\n      ";
        document.body.appendChild(addTaskDiv);
    }
});
function addTask() {
    // להוסיף קוד להוספת פתק חדש ל-HTML ולמערכת
}
