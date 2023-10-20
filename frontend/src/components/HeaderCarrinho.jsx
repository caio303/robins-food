import { useNavigate } from "../../node_modules/react-router-dom/dist/index"

export const HeaderCarrinho = ({ restaurante }) => {
    const navigate = useNavigate()
    return (
        <header id="header-carrinho">
            <div onClick={() => navigate(-1)}>Voltar</div>
            <div>CARRINHO</div>
            <div>{restaurante && restaurante.nome}</div>
        </header>
    )
}