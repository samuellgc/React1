import 'bootstrap/dist/css/bootstrap.min.css';
import face from './ifacebook.svg'
import insta from './iinsta.svg'
import './styles.scss'

export default function Footer() {
    return (
        <div class="container card text-white bg-dark mt-2">
            
        <div class="container icones">
            <a href="#"><img class="i-face" src={face} alt="icone facebook"/></a>
            <a href="#"><img class="i-insta" src={insta} alt="icone instagram"/></a>
        </div>
        </div>
    )
  };