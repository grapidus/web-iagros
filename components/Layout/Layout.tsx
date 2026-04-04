import dynamic from 'next/dynamic';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Modal = dynamic(() => import('@grapidus/widget-modal').then((m) => ({ default: m.Modal })), {
  ssr: false
});
const WhatsAppButton = dynamic(() => import('../WhatsAppButton'), {
  ssr: false
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Modal />
      <WhatsAppButton
        phoneNumber="573105803425"
        message="Hola, me gustaría obtener más información."
      />
    </>
  );
};

export default Layout;
