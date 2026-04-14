import '../Produtos/Produtos.css';

import bolsa from '../../../public/bolsa.png';
import note from '../../../public/portaNotebook.png';
import sandalia1 from '../../../public/sandalia1.png';
import sandalia2 from '../../../public/sandalia2.png';
import tamanco from '../../../public/tamanco.png';
import tenis from '../../../public/tenis.png';

export default function Produtos() {
  return (
    <div className="produtos">
        <div className='titulos'>
            <h2>Produtos</h2>
            <p>
                Conheça nossa linha de produtos, feita para você que busca qualidade e estilo.
            </p>

            <div className="produtos_grid">
                <div className="card-image">
                    <img src={sandalia1} alt="Sandália Marrom" />
                    <span className="badge-venda">Mais vendidos</span>
                </div>
                <div className="card-info">
                    <h3>Sandália Marrom</h3>
                    <p className='preco'>R$ 349,90</p>
                    <button className='btn'>Comprar agora</button>
                </div>
            </div>

            
        </div>
    </div> 
    )};