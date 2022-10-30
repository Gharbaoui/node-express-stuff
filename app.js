const express = require('express');
const {tasksRouter} = require('./router/tasks/tasks');
const app = express();
const {connectDB} = require('./db/connect');
require('dotenv').config();

const port = 3000;


app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);

// routs
// app.get('/api/v1/tasks') get all tasks
// app.post('/api/v1/tasks') store new task
// app.get('/api/v1/tasks/:taskID') get a single task
// app.patch('/api/v1/tasks/:taskID') update a task
// app.delete('/api/v1/tasks/:taskID') delete a task 


const serverStart = async () => {
    try{
        await connectDB(process.env.MONOGDB_URL);
        app.listen(port, () => {
            console.log(`listening on port ${port}....`);
        });
    }catch{
        console.log(`we could not connect to the db`);
    }
}
serverStart();