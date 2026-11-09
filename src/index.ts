
import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Lista de estados e suas capitais
const estados: Record<string, string> = {
    AC: "Rio Branco",
    AL: "Maceió",
    AP: "Macapá",
    AM: "Manaus",
    BA: "Salvador",
    CE: "Fortaleza",
    DF: "Brasília",
    ES: "Vitória",
    GO: "Goiânia",
    MA: "São Luís",
    MT: "Cuiabá",
    MS: "Campo Grande",
    MG: "Belo Horizonte",
    PA: "Belém",
    PB: "João Pessoa",
    PR: "Curitiba",
    PE: "Recife",
    PI: "Teresina",
    RJ: "Rio de Janeiro",
    RN: "Natal",
    RS: "Porto Alegre",
    RO: "Porto Velho",
    RR: "Boa Vista",
    SC: "Florianópolis",
    SP: "São Paulo",
    SE: "Aracaju",
    TO: "Palmas"
};

interface Teste {
    sigla: string
}

// Rota para consultar a capital
app.get("/estados/:sigla", (req: Request<Teste>, res: Response) => {

    const sigla = req.params.sigla.toUpperCase();

    const capital = estados[sigla];

    if (!capital) {
        return res.status(404).json({
            erro: "Estado não encontrado."
        });
    }

    return res.status(200).json({
        sigla,
        capital
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
