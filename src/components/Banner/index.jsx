import './Banner.css'
import banner from '../../../public/banner.jpg'
// import bannerMobile from '../../../public/banner_mobile.jpg'

export default function Banner() {
    return (
        <section className='secao_banner'
            style={{
                backgroundImage: `url(/banner.jpg)`
            }}
        >

            <div className='texto'>
                <h2>Preview</h2>
                <h1>Verão 2026</h1>
                <button className='btn'>Comprar</button>
            </div>

        </section>
    )
}