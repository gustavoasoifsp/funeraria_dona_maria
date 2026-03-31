import './Topo.css' 

export default function Topo() {
    return (
        <header>
            <div className='anuncio'>
                <div className="anuncio-conteudo">
                    <p>Fim da linha, começo das parcelas; 10x sem juros!</p>
                </div>
            </div>

            <div className='topo'>
                <picture>
                    <a href="#">
                        <img src="./public/logo.png"/>
                    </a>
                </picture>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Produtos</a>
                    <a href="#">Lançamentos</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}