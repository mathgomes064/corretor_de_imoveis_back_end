import express from 'express';
import userRoutes from './routes/user.routes';
import sessionRoutes from './routes/session.routes';
import imoveisRoutes from './routes/imoveis.routes';

const app = express();

app.use(express.json())

app.use("/user", userRoutes);
app.use("/login", sessionRoutes);
app.use("/imoveis", imoveisRoutes);

export default app