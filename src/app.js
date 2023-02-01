//import { v4 as uuidv4 } from 'uuid';
const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models/employees');
const app = express();
mongoose.set('strictQuery', false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const employ = [
    {
        "name": "Emmanuel",
        "industry": "Music"
    },
    {
        "name": "Peter",
        "industry": "Preacher"
    },
    {
        "name": "Paul",
        "industry": "Communication"
    }
];

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 3004;
const CONNECTION = process.env.CONNECTION;

const employee = new Employee({
    name: 'Joseph',
    industry: 'Marketing'
});

employee.save();

app.get('/', (req, res) => {
    res.send(employee);
});

app.get('/api/employee', (req, res) => {
    console.log(req.body)
    res.send(req.body);
});

// Connect with mongoose

const start = async () => {
    try {

        await mongoose.connect(CONNECTION);
    
        app.listen(PORT, () => {
            console.log(`App running on... ${PORT}`);
        });

    } catch (err) {
        console.log(err.message);
    }
}

start();














