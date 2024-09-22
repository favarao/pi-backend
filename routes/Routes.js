import express from 'express';
import EventoController from '../controllers/EventoController.js';

const router = express.Router();

router.get('/eventos', EventoController.getEventos);

router.get('/evento/:id', EventoController.getEvento);

router.post('/evento', EventoController.insertEvento);

router.put('/evento', EventoController.updateEvento);

router.delete('/evento/:id', EventoController.deleteEvento);

export default router;