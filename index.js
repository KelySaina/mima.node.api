// app.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
const connection = require('./db');


const PORT = 5000;

app.use(cors());

app.get('/', async (req, res) => {
    return res.json({ message: 'Welcome to mima.api' })
})


// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Assuming your table structure has 'name' and 'password' columns
    connection.query(
        'SELECT * FROM creds WHERE username = ? AND password = ?',
        [username, password],
        (err, rows) => {
            if (err) {
                console.error('Erreur lors de la récupération de login :', err);
                res.status(500).send('Erreur lors de la récupération de login');
            } else {
                if (rows.length === 0) {
                    res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect');
                } else {
                    res.status(200).send('Authentification réussie');
                }
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
