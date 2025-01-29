import express from 'express';
import morgan  from 'morgan';
import cors from 'cors';
import router from './routes/user.routes'

const app = express();

app.use(morgan('dev')); // Read HTTP Methods
app.use(cors());
app.use(express.json()); // Leer jsons


app.use(router); // Para leer las rutas desde routes

export default app;