
import services from '@/constants/services';
import './services.css';
import { IconDeviceImac, IconTools } from '@tabler/icons-react';

function Services() {
    return (
        <section id='services' className="services__container container">
            <h3 className='line'>Nossos serviços</h3>
            <div className="services">
                <section className="serviceitem__container">
                    <div className="service">
                        <div className="title">
                            <span><IconDeviceImac size={50} /></span>
                            <h2>Desenvolvimento de Sistemas web</h2>
                        </div>
                        <p>
                            Desevolvemos sistemas web modernos e dinâmicos paraatender
                            a sua empresa, dashboards e muito mais...
                        </p>
                    </div>
                </section>
                <section className="serviceitem__container">
                    <div className="service">
                        <div className="title">
                            <span><IconTools size={50} /></span>
                            <h2>Desenvolvimento de Sites</h2>
                        </div>
                        <p>
                            Nós criamos o site com a cara do seu negócio,
                            sites rápidos e que se adaptam a qualquer tamanho de tela.
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
}

export { Services };
