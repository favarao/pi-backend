import EventoDAO from "../persistencia/EventoDAO.js";
// DAO = Data Access Object -> Objeto de acesso aos dados
export default class Evento {
    // atributos privados
    #id;
    #nome;
    #cidade;
    #endereco;
    #data;
    #descricao;
    #valor;
    #quantidade;
    #status;

    constructor(id = 0, nome, cidade, endereco, data, descricao, valor, quantidade, status) {
        this.#id = id;
        this.#nome = nome;
        this.#cidade = cidade;
        this.#endereco = endereco;
        this.#data = data;
        this.#descricao = descricao;
        this.#valor = valor;
        this.#quantidade = quantidade;
        this.#status = status;
    }

    // métodos JavaScript getters e setters

    get id() {
        return this.#id;
    }

    set id(novoId) {
        this.#id = novoId;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get cidade() {
        return this.#cidade;
    }

    set cidade(novaCidade) {
        this.#cidade = novaCidade;
    }

    get endereco() {
        return this.#endereco;
    }

    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    }

    get data() {
        return this.#data;
    }

    set data(novaData) {
        this.#data = novaData;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(novaDescricao) {
        this.#descricao = novaDescricao;
    }

    get valor() {
        return this.#valor;
    }

    set valor(novoValor) {
        this.#valor = novoValor;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set quantidade(novaQuantidade) {
        this.#quantidade = novaQuantidade;
    }

    get status() {
        return this.#status;
    }

    set status(novoStatus) {
        this.#status = novoStatus;
    }

    // sobrescrita do método toString()
    toString() {
        return `ID: ${this.#id}
        Nome: ${this.#nome}
        Cidade: ${this.#cidade}
        Endereço: ${this.#endereco}
        Data: ${this.#data}
        Descrição: ${this.#descricao}
        Valor: ${this.#valor}
        Quantidade: ${this.#quantidade}
        Status: ${this.#status}
        `;
    }

    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            cidade: this.#cidade,
            endereco: this.#endereco,
            data: this.#data,
            descricao: this.#descricao,
            valor: this.#valor,
            quantidade: this.#quantidade,
            status: this.#status
        };
    }

    async incluir() {
        const eventoDAO = new EventoDAO();
        await eventoDAO.gravar(this);
    }

    async alterar() {
        const eventoDAO = new EventoDAO();
        await eventoDAO.alterar(this);
    }

    async excluir(id) {
        const eventoDAO = new EventoDAO();
        await eventoDAO.excluir(id);
    }

    async consultar(termoBusca) {
        const eventoDAO = new EventoDAO();
        return await eventoDAO.consultarEvento(termoBusca);
    }
}