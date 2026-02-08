export default interface Manga{
    id: number;
    nome: string;
    descricao: string;
    autor: string;
    editora: string;
    idioma: string;
    paginas: number;
    data_lancamento: Date;
    estoque: number;
    foto: string;
    valor: number;
    createdAt: Date;
    updatedAt: Date;
}