import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";

export const PaginaCarrinho = () => {
    const navigate = useNavigate()
    
    return (
        <>
            <div onClick={() => navigate(-1)}>Voltar</div>
            <div>CARRINHO</div>
        </>
    )
}