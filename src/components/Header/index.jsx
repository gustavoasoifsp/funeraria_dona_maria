import './Header.css'

export default function Header() {
    return (
        <header>
            <div className='anuncio'>
                <div className='anuncio-conteudo'>
                    <p>Tudo em 10x sem juros!</p>
                </div>
            </div>

            <div className='header'>
                <picture>
                    <a href="#">
                        <img src="./logo-flor.png"/>
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