import './footer.css'

function Footer() {
    return (
        <section>
            <footer className="rodape">
                <div className="rodape-principal container">
                    <div className="rodape-logo">
                        <img className="img-responsive" src="https://media.discordapp.net/attachments/835234743108632578/1002728224532463626/Logo1.png" alt="logotipo RecriAr" />
                    </div>
                    <div className="rodape__redes-sociais">
                        <a href="https://www.facebook.com/equipe.recriar.2022/" target="_blank">
                            <img className="socials" src="https://media.discordapp.net/attachments/835234743108632578/1002727129009639484/facebook.png" alt="ícone do Facebook" />
                        </a>
                        <a href="https://www.instagram.com/equipe.recriar/" target="_blank">
                            <img className="socials" src="https://media.discordapp.net/attachments/835234743108632578/1002727767437226004/instagram.png" alt="ícone do Instagram" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5531984291570" target="_blank">
                            <img className="socials" src="https://media.discordapp.net/attachments/835234743108632578/1002727808990183454/whatsapp.png" alt="ícone do Whatsapp" />
                        </a>
                    </div>
                </div>
                <div className="rodape-cc">
                    <p>Creative Commons 2022 | Feito com amor por Lorena Araújo para Reprograma</p>
                </div>
            </footer>
        </section >
    )
}

export default Footer