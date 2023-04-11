import React from 'react';
import './footer.css'
import Image from "../Image/Image";
import { Link as Anchor } from 'react-router-dom'
import logoMate from '../../Img/LOGO-MATEAR.png'
import mercadopago from '../../Img/mercadopago.png'
import paypal from '../../Img/paypal.png'
import instagram from '../../Img/instagram.png'
import telefono from '../../Img/telefono.png'
import pindemapa from '../../Img/pindemapa.png'
import correo from '../../Img/correo.png'
import reloj from '../../Img/reloj.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='section-map'>
                <div className='map'>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.47497046794!2d-58.59811171411622!3d-34.61543034822564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1680809010312!5m2!1ses!2sar" 
                width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='description'>
                <p id='wellcome'>Welcome to our website, where we are proud to offer the highest quality thermos and mate products on the market.
                 Our business was born out of a love for the rich culture and tradition of sharing mate with friends and family.
                  We understand that mate is not just a drink, but a way of life for
                 many people around the world, and we are committed to providing the
                  tools and accessories necessary to enjoy this experience to the fullest.</p>
                </div>
            </div>
            <div className='section-contact'>
                <div className='anchors-pages'>
                    <Anchor className='anchor' to='./store'>Shop</Anchor>
                    <Anchor className='anchor' to="./about-us">About Us</Anchor>
                    <Anchor className='anchor' to="./contact">Contact</Anchor>
                    <Anchor className='anchor' to="./whole-saler">WholeSaler</Anchor>
                </div>
                <div className='pay'>
                    <p>Payment Methods</p>
                    <Image src={paypal} alt="Paypal" />
                    <Image src={mercadopago} alt="MercadoPago" />
                </div>
                <div className='termo'>
                    <Image src={logoMate} alt="Termo" />
                </div>  
                <div className='contact-us'>
                    <p><Image className='instagram' src={pindemapa}  />BUENOS AIRES ESQ LARRAÑACA, NUEVA CBA - CORDOBA, ARGENTINA</p>
                    <p>  <Image className='instagram' src={telefono} />+03355626587</p>
                    <a href="mailto:elcorreoquedesees@correo.com"><Image className='instagram' src={correo}  />Aquí el texto que desees que aparezca</a>
                    <p ><Image className='instagram' src={reloj} />10-21hs LUNES A VIERNES / 10-20hs SABADOS</p>
                    <Anchor  to=""><Image  className='instagram' src={instagram}/> @mateAr </Anchor>
                </div>
                </div>
        </div>
    );
}

export default Footer;