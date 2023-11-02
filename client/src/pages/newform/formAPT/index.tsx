import { ChangeEvent, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { createNewFormAPT } from "../../../api/formApi";
import { useNavigate } from "react-router-dom";

export const NewForm = () => {

    const [tarefa, setTarefa] = useState("");
    const [area, setArea] = useState("");
    const [analiseBem, setAnaliseBem] = useState("")
    const [analiseHabilidato, setAnaliseHabilidato] = useState("")
    const [analiseSaber, setAnaliseSaber] = useState("")
    const [participacaoDDS, setParticipacaoDDS] = useState("")
    const [participacaoDDSTema, setParticipacaoDDSTema] = useState("")

    const [episObrigatorios, setEpisObrigatorios] = useState<string[]>([]);
    const [riscosAtividade, setRiscosAtividade] = useState<string[]>([]);

    const [cookiesUserName] = useCookies(["userName"]);
    const [cookiesFirstName] = useCookies(["firstName"]);

    const username = cookiesUserName.userName.toString();
    const firstName = cookiesFirstName.firstName.toString();

    const [errorCatched, setErrorCatched] = useState("")
    const navigate = useNavigate();

    const handleCheckboxChangeEPI = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (episObrigatorios.includes(value)) {
            setEpisObrigatorios(episObrigatorios.filter((item) => item !== value));
        } else {
            setEpisObrigatorios([...episObrigatorios, value]);
        };
    }

    const handleCheckboxChangeAtividades = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (riscosAtividade.includes(value)) {
            setRiscosAtividade(riscosAtividade.filter((item) => item !== value));
        } else {
            setRiscosAtividade([...riscosAtividade, value]);
        }
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        console.log("working")

        let data = {
            username,
            firstName,
            tarefa,
            area,
            analiseBem,
            analiseHabilidato,
            analiseSaber,
            participacaoDDS,
            participacaoDDSTema,
            episObrigatorios,
            riscosAtividade
        }

        const response = await createNewFormAPT(data);

        console.log("worked")

        console.log("response index", response)

        //gerir erro

        // if (response && response.error) {
        //     setErrorCatched(response.error);
        // } else {
        navigate("/login");
        // }

    };

    const safetyEquipmentList: string[] = [
        "Blusão de raspa",
        "Cinto de segurança paraquedista",
        "Máscara descartável",
    ];

    const RiscoEncontradoAtividade: string[] = [
        "Ataque de animals peconhentos/silvestres",
        "Atingido por",
        "Atropelamento",
        "Bater Contra",
        "Choque elétrico Incêndio/Explosão",

    ];

    return (

        <div className="singup-container">
            <div className="singup-title">Análise Preliminar de Evento</div>
            <form action="#">
                <div className="user-details">
                    <div className="user-input-box">
                        <span className="user-input-details">Tarefa</span>
                        <input className="user-input-input" type="text"
                            value={tarefa} required
                            onChange={(e) => setTarefa(e.target.value)}
                            placeholder="Insira a natureza da tarefa" />
                    </div>
                    <div className="user-input-box">
                        <span className="user-input-details">Área</span>
                        <input className="user-input-input" type="text"
                            value={area} required
                            onChange={(e) => setArea(e.target.value)}
                            placeholder="Insira a área do problema" />
                    </div>


                    <div>
                        <div className="user-input-gender-details">
                            <input className="user-input-radio-gender" type="radio"
                                name="simnao" id="dot-1" value="Sim"
                                checked={participacaoDDS === "Sim"}
                                onChange={(e) => setParticipacaoDDS(e.target.value)} />
                            <input className="user-input-radio-gender" type="radio"
                                name="simnao" id="dot-2" value="Não"
                                checked={participacaoDDS === "Não"}
                                onChange={(e) => setParticipacaoDDS(e.target.value)} />
                            <span className="user-input-gender-title">Participação do DDS?</span>

                            <div className="user-input-category">
                                <label htmlFor="dot-1" className="user-input-dot-one-label">
                                    <span className="user-input-dot-one"></span>
                                    <span className="user-input-dot-gender">Sim</span>
                                </label>
                                <label htmlFor="dot-2" className="user-input-dot-one-label">
                                    <span className="user-input-dot-one"></span>
                                    <span className="user-input-dot-gender">Não</span>
                                </label>
                            </div>
                        </div>
                    </div>


                    <div className="user-input-box">
                        <span className="user-input-details">Tema</span>
                        <input className="user-input-input" type="text"
                            placeholder="Se sim, tema. Se não motivo"
                            value={participacaoDDSTema} required
                            onChange={(e) => setParticipacaoDDSTema(e.target.value)} />
                    </div>

                    <div>
                        <div className="user-input-gender-details">
                            <input className="user-input-radio-gender" type="radio"
                                name="gender" id="dot-3" value="Sim"
                                checked={analiseBem === "Sim"}
                                onChange={(e) => setAnaliseBem(e.target.value)} />
                            <input className="user-input-radio-gender" type="radio"
                                name="gender" id="dot-4" value="Não"
                                checked={analiseBem === "Não"}
                                onChange={(e) => setAnaliseBem(e.target.value)} />
                            <span className="user-input-gender-title">Sinto-me bem para realizar essa tarefa?</span>

                            <div className="user-input-category">
                                <label htmlFor="dot-3" className="user-input-dot-one-label">
                                    <span className="user-input-dot-one"></span>
                                    <span className="user-input-dot-gender">Sim</span>
                                </label>
                                <label htmlFor="dot-4" className="user-input-dot-one-label">
                                    <span className="user-input-dot-one"></span>
                                    <span className="user-input-dot-gender">Não</span>
                                </label>
                            </div>
                        </div>
                    </div>


                    <div className="user-input-gender-details">
                        <input className="user-input-radio-gender" type="radio"
                            name="gender" id="dot-5" value="Sim"
                            checked={analiseHabilidato === "Sim"}
                            onChange={(e) => setAnaliseHabilidato(e.target.value)} />
                        <input className="user-input-radio-gender" type="radio"
                            name="gender" id="dot-6" value="Não"
                            checked={analiseHabilidato === "Não"}
                            onChange={(e) => setAnaliseHabilidato(e.target.value)} />
                        <span className="user-input-gender-title">Sou habilitado para fazer a tarefa?</span>

                        <div className="user-input-category">
                            <label htmlFor="dot-5" className="user-input-dot-one-label">
                                <span className="user-input-dot-one"></span>
                                <span className="user-input-dot-gender">Sim</span>
                            </label>
                            <label htmlFor="dot-6" className="user-input-dot-one-label">
                                <span className="user-input-dot-one"></span>
                                <span className="user-input-dot-gender">Não</span>
                            </label>
                        </div>
                    </div>

                    <div className="user-input-gender-details">
                        <input className="user-input-radio-gender" type="radio"
                            name="gender" id="dot-7" value="Sim"
                            checked={analiseSaber === "Sim"}
                            onChange={(e) => setAnaliseSaber(e.target.value)} />
                        <input className="user-input-radio-gender" type="radio"
                            name="gender" id="dot-8" value="Não"
                            checked={analiseSaber === "Não"}
                            onChange={(e) => setAnaliseSaber(e.target.value)} />
                        <span className="user-input-gender-title">As pessoas sabem onde estou?</span>

                        <div className="user-input-category">
                            <label htmlFor="dot-7" className="user-input-dot-one-label">
                                <span className="user-input-dot-one"></span>
                                <span className="user-input-dot-gender">Sim</span>
                            </label>
                            <label htmlFor="dot-8" className="user-input-dot-one-label">
                                <span className="user-input-dot-one"></span>
                                <span className="user-input-dot-gender">Não</span>
                            </label>
                        </div>
                    </div>

                    <div className="user-input-checkbox">
                        <span className="user-input-gender-title">EPIS Obrigatorios</span>
                        <ul>
                            {safetyEquipmentList.map((item) => (
                                <li key={item}>
                                    <input
                                        type="checkbox"
                                        name="safety_equipment"
                                        value={item}
                                        className="user-input-gender-title"
                                        checked={episObrigatorios.includes(item)}
                                        onChange={handleCheckboxChangeEPI}
                                    />
                                    <label htmlFor={item}>{item}</label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="user-input-checkbox">
                        <span className="user-input-gender-title">Riscos encontrados na atividade</span>
                        <ul>
                            {RiscoEncontradoAtividade.map((item) => (
                                <li key={item}>
                                    <input
                                        type="checkbox"
                                        name="safety_equipment"
                                        value={item}
                                        className="user-input-gender-title"
                                        checked={riscosAtividade.includes(item)}
                                        onChange={handleCheckboxChangeAtividades}
                                    />
                                    <label htmlFor={item}>{item}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="user-input-div-button">
                    <span className="user-input-details"></span>
                    <button className="user-input-button" type="submit" onClick={handleSubmit}>Inscrever</button>
                    <span className="user-input-details">

                    </span>
                </div>
            </form>
        </div>

    )

}