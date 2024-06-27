const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

// Configurar la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ecommerce'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Rutas de la API para Usuarios
app.get('/api/usuarios', (req, res) => {
  db.query('SELECT * FROM Usuarios', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/api/usuarios', (req, res) => {
  const usuario = req.body;
  db.query('INSERT INTO Usuarios SET ?', usuario, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put('/api/usuarios/:id', (req, res) => {
  const usuario = req.body;
  const id = req.params.id;
  db.query('UPDATE Usuarios SET ? WHERE id = ?', [usuario, id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete('/api/usuarios/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Usuarios WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Rutas de la API para Transacciones
app.get('/api/transacciones', (req, res) => {
  db.query('SELECT * FROM Transacciones', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/api/transacciones', (req, res) => {
  const transaccion = req.body;
  db.query('INSERT INTO Transacciones SET ?', transaccion, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put('/api/transacciones/:id', (req, res) => {
  const transaccion = req.body;
  const id = req.params.id;
  const usuario_id = transaccion.usuario_id;

  // Validate if usuario_id exists in Usuarios table
  db.query('SELECT * FROM Usuarios WHERE id = ?', [usuario_id], (err, results) => {
    if (err) {
      console.error('Error checking usuario_id:', err);
      res.status(500).send(err);
      return;
    }

    if (results.length === 0) {
      res.status(400).send({ error: 'Usuario with specified id does not exist' });
      return;
    }

    // If usuario_id exists, proceed to update Transacciones
    db.query('UPDATE Transacciones SET ? WHERE id = ?', [transaccion, id], (err, result) => {
      if (err) {
        console.error('Error updating transaction:', err);
        res.status(500).send(err);
        return;
      }
      res.send(result);
    });
  });
});

app.delete('/api/transacciones/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Transacciones WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
