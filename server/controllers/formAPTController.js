const creatAPTService = require('../services/formAPTService')

const creatAPT = async (req, res) => {
    
    const {firstName, 
        username,
        tarefa, 
        area, 
        analiseBem, 
        analiseHabilidato, 
        analiseSaber, 
        participacaoDDS, 
        participacaoDDSTema, 
        episObrigatorios, 
        riscosAtividade} = req.body;

        try{
            const form =  await creatAPTService.creatAPT(
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
                riscosAtividade)

                res.json({ message: form })
        } catch(error) {
            console.log("Erro criando formulário", error)
        }
}

module.exports = { creatAPT }