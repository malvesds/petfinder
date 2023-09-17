// Importando as bibliotecas necessárias
  import express from 'express';
  import dotenv from 'dotenv';
  import mustache from 'mustache-express';
  import path from 'path';

// Importando rotas
  import mainRoutes from './routes/index';


// Configurações
  dotenv.config(); // variáveis de ambiente
  const server = express();
  // Template Engine
    server.set('view engine', 'mustache');
    server.set('views', path.join(__dirname,'views'));
    server.engine('mustache', mustache());
  // Pasta Pública
    server.use(express.static(path.join(__dirname,'../public')));
  // Routes
    server.use(mainRoutes)
    server.use((req, res) => {
      res.send('Page not found!');
    });


// Finalizando
  server.listen(process.env.PORT);

