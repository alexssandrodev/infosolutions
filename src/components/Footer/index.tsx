
import { IconBrandInstagram, IconBrandLinkedin, IconRegistered } from '@tabler/icons-react';
import './footer.css';
import Link from 'next/link';

function Footer() {
    const today = new Date().getFullYear();
    return (
        <footer className="footer__container" id='footer'>
            <div className="socials">
                <h3>Redes sociais</h3>
                <ul>
                    <Link href='https://instagram.com/infosolutionstech' target='_blank'><li><IconBrandInstagram /></li></Link>
                    <Link href='https://inkedin.com/alexssandrodev' target='_blank'><li><IconBrandLinkedin /></li></Link>
                </ul>
            </div>
            <Link className='whats_button' href=''><span>Whatsapp infosolutions</span></Link>
            <div className="address">
                <p>Todos os direitos reservados infosolutions<IconRegistered /> 2020-{today}.</p>
                <p>Av. Coqueiros, ceara-mirim - RN</p>
            </div>
        </footer>
    );
}

export { Footer };
