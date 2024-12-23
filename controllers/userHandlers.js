const { v4: uuidv4 } = require("uuid");
const DB = require('../utils/databaseConn');

const GetUsers = (req, res) => {
    const sqlStat = DB.prepare('SELECT * FROM users');
    const users = sqlStat.all();
    res.json(users);
};

const AddUser = (req, res) => {
    const { name } = req.body;
    const userID = uuidv4();
    const sqlStat = DB.prepare('INSERT INTO users (id, name) VALUES (?, ?)');
    sqlStat.run(userID, name);
    res.json({"msg": "Event added successfully!"});
};

const DeleteUser = (req, res) => {
    const eventID = req.params.id;
    const sqlStat = DB.prepare('DELETE FROM users WHERE id = ?');
    sqlStat.run(eventID);
    res.json({ "msg": `User ${req.params.id} deleted successfully!` });
};

module.exports = {
    GetUsers,
    AddUser,
    DeleteUser
};