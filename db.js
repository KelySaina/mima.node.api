const mysql = require('mysql');

// Configurer la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'mysql-kelysaina.alwaysdata.net',
  user: 'kelysaina',
  password: '0510KS0510',
  database: 'kelysaina_jemima_db'
});

// Établir la connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

module.exports = connection;
