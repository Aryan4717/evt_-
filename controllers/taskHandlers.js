const { v4: uuidv4 } = require("uuid");
const DB = require('../utils/databaseConn');

const GetTasks = (req, res) => {
    const sqlStat = DB.prepare('SELECT * FROM tasks');
    const users = sqlStat.all();
    res.json(users);
};

const AddTask = (req, res) => {
    const { name, eventID, deadline, status, assignedAttendee } = req.body;
    const taskID = uuidv4();
    const sqlStat = DB.prepare('INSERT INTO tasks (id, event_id, name, deadline, status, assigned_attendee) VALUES (?, ?, ?, ?, ?, ?)');
    sqlStat.run(taskID, eventID, name, deadline, status, assignedAttendee);
    res.json({"msg": "Task added successfully!"});
};

const DeleteTask = (req, res) => {
    const eventID = req.params.id;
    const sqlStat = DB.prepare('DELETE FROM tasks WHERE id = ?');
    sqlStat.run(eventID);
    res.json({ "msg": `Task ${req.params.id} deleted successfully!` });
};

module.exports = {
    GetTasks,
    AddTask,
    DeleteTask
};