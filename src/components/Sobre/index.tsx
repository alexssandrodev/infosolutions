
import Image from 'next/image';
import './sobre.css';

function Sobre() {
    return (
        <section className="sobre__container">
            <div className="sobre container">
                <h3>Sobre a Infosolutions</h3>
                <div className="paragraphs">
                    <p>A infosolutions é uma empresa que criar soluções focadas para o negócio.</p>
                    <p>
                        Criamos sites e sistemas web leves, rápidos e otimizados paraosmotores de busca,
                        ou seja, seu site estará hanckeao nas pesquisas.
                    </p>
                    <p>Nossa missão é ajudar empresas a melhorarem o seu negócio atravésdatecnologia.</p>
                </div>
            </div>
        </section>
    );
}

export { Sobre };
