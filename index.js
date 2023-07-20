// app.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
const pool = require('./db');


const PORT = 5000;

app.use(cors());

app.get('/',async (req, res)=>{
	return res.json({message:'Welcome to mima.api'})
})


// Login route
app.post('/login', async (req, res) => {
	
    const { username, password } = req.body;


    try {
        // Retrieve the user with the provided username and password from the database
        const query = 'SELECT * FROM creds WHERE username = $1 AND password = $2';
        const result = await pool.query(query, [username, password]);

        if (result.rows.length === 0) {
            // User not found or incorrect password
            return res.json({ message: 'Invalid username or password' });
        }

        // Successful login
        res.json({ message: 'Login successful!' });
    } catch (error) {
        console.error('Error during login:', error);
        res.json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
