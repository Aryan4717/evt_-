const { v4: uuidv4 } = require('uuid');
const DB = require("../utils/databaseConn");

const GetEvents = (req, res) => {
    const sqlStat = DB.prepare('SELECT * FROM events');
    const events = sqlStat.all();
    res.json(events);
};

const AddEvent = (req, res) => {
    const { eventName, desc, location, date, attendeeList } = req.body;
    const id = uuidv4();
    const sqlStat = DB.prepare('INSERT INTO events (id, eventName, desc, location, date, attendees) VALUES (?, ?, ?, ?, ?, ?)');
    sqlStat.run(id, eventName, desc, location, date, attendeeList);
    res.json({"msg": "Event added successfully!"});
};

const UpdateEvent = (req, res) => {
    const eventID = req.params.id;
    const { eventName, desc, location, date, attendees } = req.body;
    const sqlStat = DB.prepare('UPDATE events SET eventName = ?, desc = ?, location = ?, date = ?, attendees = ? WHERE id = ?');
    sqlStat.run(eventName, desc, location, date, attendees, eventID);
    res.json({ "msg": `Event ${req.params.id} updated successfully!` });
};

const DeleteEvent = (req, res) => {
    const eventID = req.params.id;
    const sqlStat = DB.prepare('DELETE FROM events WHERE id = ?');
    sqlStat.run(eventID);
    res.json({ "msg": `Event ${req.params.id} deleted successfully!` });
};

module.exports = {
    GetEvents,
    AddEvent,
    UpdateEvent,
    DeleteEvent
};