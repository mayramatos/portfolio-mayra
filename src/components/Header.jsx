function Header() {

    const menuItens = ['Home', 'Sobre mim', 'Habilidades', 'Projetos', 'Contato'];

    return (

        <header>

            <div>

                <img src="" alt="" />

            </div>

            <nav>

                <ul>

                    {menuItens.map(item => <li key={item}><a>{item}</a></li>)}

                </ul>

            </nav>

        </header>

    )

}



export default Header;