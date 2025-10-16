import Logo from '../assets/images/logo.png';
import styles from './Header.module.css';

function Header() {
    const menuItens = ['Home', 'Sobre mim', 'Habilidades', 'Projetos', 'Contato'];
    return (
        <header className={styles.headerContainer}>
            <div>
                <img className={styles.headerLogo} src={Logo} alt="Logotipo de Mayra Matos"/>
            </div>
            <nav>
                <ul className={styles.headerNav}>
                    {menuItens.map(item => <li key={item}><a>{item}</a></li>)}
                </ul>
            </nav>
        </header>

    )
}



export default Header;