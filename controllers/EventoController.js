import Evento from '../models/Evento.js';

class EventoController {

    //lista de eventos
    async getEventos(req, res) {
        if (req.method == 'GET') {
            const evento = new Evento();
            evento.consultar().then((eventos) => {
                res.status(200).json(eventos);
            }).catch(erro => {
                res.status(500).json({ status: false, message: 'Erro ao buscar os eventos' });
            });
        }
        else
            res.status(405).json({ status: false, message: 'Método não permitido' });
    }

    //evento por id
    async getEvento(req, res) {
            const { id } = req.params;
            if (req.method == 'GET' && id != null) {
                const evento = new Evento();
                evento.consultar(id).then((evento) => {
                    if(evento.length == 0)
                        res.status(404).json({ status: false, message: 'Evento não encontrado' });
                    else
                        res.status(200).json(evento[0]);                        
                }).catch(erro => {
                    res.status(500).json({ status: false, message: 'Erro ao buscar o evento' });
                });
            }
            else
                res.status(405).json({ status: false, message: 'Método não permitido' });
    }

    //post em json
    async insertEvento(req, res) {
        if (req.method == 'POST' && req.is('application/json')) {
            const { nome, cidade, endereco, data, descricao, valor, quantidade, status } = req.body;

            if (!nome || !cidade || !endereco || !data || !descricao || !valor || !quantidade || !status)
                return res.status(400).json({ status: false, message: 'Todos os campos são obrigatórios' });

            const evento = new Evento('', nome, cidade, endereco, data, descricao, valor, quantidade, status);
            evento.incluir().then(() => {
                res.status(201).json({ status: true, message: 'Evento adicionado com sucesso' });
            }).catch(erro => {
                res.status(500).json({ status: false, message: 'Erro ao adicionar o evento' });
            });
        }
        else
            res.status(405).json({ status: false, message: 'Método não permitido' });
    }

    //put  em json
    async updateEvento(req, res) {
        if(req.method == 'PUT' && req.is('application/json')) {
            const { id, nome, cidade, endereco, data, descricao, valor, quantidade, status } = req.body;
            if (!id || !nome || !cidade || !endereco || !data || !descricao || !valor || !quantidade || !status)
            {
                if(id)
                    return res.status(400).json({ status: false, message: 'Todos os campos são obrigatórios' });
                else
                    return res.status(400).json({ status: false, message: 'ID é obrigatório' });
            }
                
            const evento = new Evento(id, nome, cidade, endereco, data, descricao, valor, quantidade, status);
            evento.alterar().then(() => {
                res.status(200).json({ status: true, message: 'Evento alterado com sucesso' });
            }).catch(erro => {
                res.status(500).json({ status: false, message: 'Erro ao alterar o evento' });
            });
        }
        else
            res.status(405).json({ status: false, message: 'Método não permitido' });
    }

    //delete por id
    async deleteEvento(req, res) {
        const { id } = req.params;
        if(req.method == 'DELETE' && id != null) {
            if (!id)
                return res.status(400).json({ status: false, message: 'ID é obrigatório' });
            const evento = new Evento();
            evento.excluir(id).then(() => {
                res.status(200).json({ status: true, message: 'Evento excluído com sucesso' });
            }).catch(erro => {
                res.status(500).json({ status: false, message: 'Erro ao excluir o evento' });
            });
        }
        else
            res.status(405).json({ status: false, message: 'Método não permitido' });
    }
}

export default new EventoController();