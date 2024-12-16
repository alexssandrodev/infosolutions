
import { IconClock } from '@tabler/icons-react';
import './benefits.css';
import gsap from 'gsap';

function Benefits() {
    return (
        <section className="benefits__container">
            <div className="container">
                <h3>Nossos diferenciais</h3>
                <div className="benefits">
                    <div className="box_benefit">
                        <h2>+50</h2>
                        <p>Clientes atendidos.</p>
                    </div>
                    <div className="box_benefit">
                        <h2><IconClock size={40} /></h2>
                        <p>Cumprimos nosso prazo de entrega.</p>
                    </div>
                    <div className="box_benefit">
                        <h2>24h</h2>
                        <p>Sites no ar 24hs por dia.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Benefits };
