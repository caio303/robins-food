import { useEffect, useState } from "react"
import { api } from "../api"
import './ConteudoPerfil.scss'
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index"
import { faPen, faUser } from "../../node_modules/@fortawesome/free-solid-svg-icons/index"
import { getCepComMascara, getCpfComMascara, getTelefoneComMascara } from "../utils"

export const ConteudoPerfil = () => {
    const [ usuario, setUsuario ] = useState({nome: 'Loading...', cpf: '000.000.000-00', endereco: 'Rua ...', cep: '00000-000', telefone: '(00) 00000-0000', id: -1, email: 'email@email.com'})

    useEffect(()=>{
        api.usuarios.getInfoUsuario().then(user => setUsuario(user))
    },[])

    return (
       <main id="conteudo-perfil">
            <div id="conteudo-perfil__painel">
                <div id="conteudo-perfil__painel__foto"> <FontAwesomeIcon icon={faUser}/> </div>
                <div id="conteudo-perfil__painel__nome"> { usuario.nome } </div>
                <div id="conteudo-perfil__painel__editar" title="Edit action will be available in v2.0"> <FontAwesomeIcon icon={faPen}/> </div>
            </div>
            <div id="conteudo-perfil__dados">
                <div id="conteudo-perfil__dados__cpf"> 
                    <span className="label">CPF: </span>{ getCpfComMascara(usuario.cpf) } 
                </div>
                <div id="conteudo-perfil__dados__email"> 
                <span className="label">E-mail: </span>{ usuario.email } 
                </div>
                <div id="conteudo-perfil__dados__telefone"> 
                <span className="label">Telefone: </span>{ getTelefoneComMascara(usuario.telefone) } 
                </div>
                <div id="conteudo-perfil__dados__endereco"> 
                <span className="label">Endereço: </span>{ usuario.endereco }, { getCepComMascara(usuario.cep) } 
                </div>
            </div>
       </main>
    )
}