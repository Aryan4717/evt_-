const express = require('express');
const { GetUsers, AddUser, DeleteUser } = require('../controllers/userHandlers');
const UsersRouter = express.Router();

// User Management API definitions
UsersRouter.get('/', GetUsers);
UsersRouter.post('/', AddUser);
UsersRouter.delete('/:id', DeleteUser);

module.exports = {
    UsersRouter
};