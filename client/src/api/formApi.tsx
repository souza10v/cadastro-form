type FormDataProps = {
        username: string;
        firstName: string;
        tarefa: string;
        area: string;
        analiseBem: string;
        analiseHabilidato: string;
        analiseSaber: string;
        participacaoDDS: string;
        participacaoDDSTema: string;
        episObrigatorios: string[];
        riscosAtividade: string[];
}

const createNewFormAPT = async ( formData : FormDataProps ) => {
    
    try {
        const response = await fetch(`http://localhost:8010/forms/createformapt`, { //ver .env
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (response.status === 200) {
            const responseData = await response.json(); // esperar json resposta
            console.log("funcionou")
            console.log("Response form to front end from server:", responseData);
            return responseData;
        }
    } catch (error) {
        console.log(error)
        const responseData = `Entrar em contato com suporte e informar erro: ${error}`;
        return responseData;
    }

}

export {createNewFormAPT}