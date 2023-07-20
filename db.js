// db.js
const { Pool } = require('pg');

// Replace these with your PostgreSQL database credentials
const dbConfig = {
    user: 'mqywuitp',
    password: '0O6_Uk10xbzUUnK24T-N2-WqExeMmYdF',
    host: 'arjuna.db.elephantsql.com',
    port: 5432,
    database: 'mqywuitp',
};

const pool = new Pool(dbConfig);

// Test the database connection
pool.connect((err, client, done) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database successfully!');
        // Release the client from the pool
        done();
    }
});

module.exports = pool;
