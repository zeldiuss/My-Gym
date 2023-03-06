import './footer.scss';
import WhatsAppChatLink from './WhatsApp';

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li><a href="#">Instagram</a></li>
        <li><a href="#"><WhatsAppChatLink/></a></li>

        <li><a href="#">Correo</a></li>
        <li><a href="#">Enlace 3</a></li>
      </ul>
    </div>
  );
}

export default Footer ;
