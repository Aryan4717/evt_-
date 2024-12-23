const sqlite3 = require('better-sqlite3');

const DB = new sqlite3('./evt-mgt.sqlite');

DB.prepare(`
    CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    eventName TEXT UNIQUE NOT NULL,
    desc TEXT NOT NULL,
    location TEXT NOT NULL,
    date TEXT NOT NULL,
    attendees TEXT DEFAULT '[]'
)`).run();

DB.prepare(`
    CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL
)`).run();

DB.prepare(`
    CREATE TABLE IF NOT EXISTS tasks (
    id TEXT PRIMARY KEY,
    event_id TEXT,
    name TEXT,
    deadline TEXT,
    status TEXT,
    assigned_attendee TEXT
)`).run();

module.exports = DB;