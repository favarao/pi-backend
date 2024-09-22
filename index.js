import express from 'express';
import apiRoutes from './routes/Routes.js';

const host = '0.0.0.0';
const porta = 3000;
const app = express();

//interpretar json
app.use(express.json());

//rotas api
app.use('/', apiRoutes);

app.use((erro, req, res, next) => {
    if (erro instanceof SyntaxError && erro.status === 400 && 'body' in erro && (req.method == 'POST' || req.method == 'PUT')) {
        return res.status(400).json({ status: false, message: "Formato inválido de JSON" });
    }
    next();
});

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});

