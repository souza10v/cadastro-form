const pool = require('../db')

const creatAPT = async (
    firstName,
    username,
    tarefa,
    area,
    analiseBem,
    analiseHabilidato,
    analiseSaber,
    participacaoDDS,
    participacaoDDSTema,
    episObrigatorios,
    riscosAtividade
) => {

    const newForm = await pool.query('INSERT INTO form_apt (executante, username, tarefa, area_producao, analise_pessoal_bem, analise_pessoal_habilitado, analise_pessoal_saber, particao_dds, particao_dds_tema, epis_obrigatorios, riscos_atividade) VALUES($1, $2, $3, $4, $5, $6, $7, $8 ,$9 ,$10 ,$11)',
        [firstName,
            username,
            tarefa,
            area,
            analiseBem,
            analiseHabilidato,
            analiseSaber,
            participacaoDDS,
            participacaoDDSTema,
            episObrigatorios,
            riscosAtividade]);

    return ("Created sucessful")
}

module.exports = { creatAPT }