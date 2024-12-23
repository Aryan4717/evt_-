const express = require('express');
const bodyParser = require('body-parser');

const { EventsRouter } = require('./routes/eventRoutes');
const { UsersRouter } = require('./routes/userRoutes');
const { TasksRouter } = require('./routes/taskRoutes');


const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// API definitions
app.use('/events', EventsRouter);
app.use('/users', UsersRouter);
app.use('/tasks', TasksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});