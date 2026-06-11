require('dotenv').config();

const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'mediplus-mysql',
    user: 'root',
    password: 'root123',
    database: 'mediplus'
});

db.connect((err) => {
if (err) {
console.error('Database connection failed:', err);
return;
}

```
console.log('Connected to MySQL');
```

});

app.get('/', (req, res) => {
res.send('MediPlus API Running');
});

app.get('/api/doctors', (req, res) => {
db.query('SELECT * FROM doctors', (err, results) => {
if (err) {
console.error(err);
return res.status(500).json({
error: 'Database query failed'
});
}

    res.json(results);
});

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
