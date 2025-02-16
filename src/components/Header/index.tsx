'use client';

import Image from 'next/image';
import './header.css';
import Link from 'next/link';
import { IconBrandWhatsapp, IconCpu, IconDeviceMobile, IconHome, IconMenu, IconTools, IconX } from '@tabler/icons-react';
import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="header__container">
      <div className="box_header">
        <div className="box_logo">
          <div className="logo">
            <Image className='alex-logo' src='/infosolutions-logo-black.png' width={300} height={52} alt='Logotipo Alex 1' />
          </div>
          <span onClick={() => setOpen((state) => !state)} className="icon-menu"><IconMenu size={40} /></span>
        </div>
        <div className={`menu ${open ? 'open' : 'close'}`}>
          <span onClick={() => setOpen(false)} className='icon_close'><IconX /></span>
          <h2>Menu</h2>
          <ul>
            <Link href='/'><li>Home</li></Link>
            <Link href='#services'><li>Serviços</li></Link>
            <Link href='#projects'><li>Projetos</li></Link>
            <Link href='#customers'><li>Clientes</li></Link>
            <Link href='#depoiments'><li>Depoimentos</li></Link>
            <Link href='#footer'><li>Contato</li></Link>
          </ul>
        </div>
      </div>
      <section className="header">

        <div className="box_title">
          <div className="title">
            <h1>Soluções em tecnologia e marketing, para o seu negócio.</h1>
            <p>
              Fale comigo agora no whatsapp para tirar qualquer dúvida
              e fazer seu orçamento.
            </p>
            <Link
              className='whats_button'
              href='https://wa.me/96102818'
              target='_blanck'>
              <span className='link-whats'><IconBrandWhatsapp stroke={1} /> Whatsapp infosolutions</span>
            </Link>
          </div>
          <div className="development">
            <Image className='image-dev' src='/development.png' width={200} height={200} alt='Image desenvolvimento de sistemas' />
          </div>
        </div>
      </section>
    </header>
  );
}

export { Header };

