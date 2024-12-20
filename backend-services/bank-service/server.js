require('dotenv').config();
const express = require('express');
const db = require('./utils/db');
const bankRoutes = require('./routes/bankRoutes');

const app = express();
app.use(express.json());
app.use('/api/bank', bankRoutes);

const port = process.env.PORT || 5001;

db.connect(err => {
    if (err) {
        console.log('Unable to connect to database');
        process.exit(1);
    }
    console.log('Connected to database');
    app.listen(port, () => console.log(`Bank service listening on port ${port}!`));
});

app.get('/', (req, res) => res.send('Bank Service Running'));
