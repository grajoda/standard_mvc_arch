/* configurar rotas, especificar porta de execução, e variáveis de ambiente */

// importar dependencias
require('dotenv').config(); // => Configurações de variáveis de ambientes em .env
const express = require('express'); 

const app = express();

// general config
const path = require('path');

app.use("/public",express.static("../public")); // => configurando diretorio public
// Define o caminho completo para a pasta views
app.set('views', path.join(__dirname, '../views')); // => configurando diretório views

// Importando e configurando as rotas
const Routes = require('./routes/routes');
app.use('/', Routes);

// PORT 
const PORT = 5050
app.listen(PORT);
console.log('server online on port ${PORT}');


