import './equipe.css'

function Equipe() {
    return (
        <section>
            <h1 className="titulo">Nossa equipe</h1>
            <div className='curiosidades-linha'>
                <div className='linha'>
                    <span className="linha-1"></span><br></br>
                    <span className="linha-2"></span><br></br>
                    <span className="linha-3"></span>
                </div>
            </div>
            <div className="equipe-coluna">
                <div className="membras">
                    <img src="src/assets/Lorena.png" alt="foto Lorena Maia" />
                    <h2>Lorena Maia</h2>
                    <p>Idealizadora da RecriAr, apaixonada por tecnologia, música, cinema,
                        bichinhos, natureza e pessoas!<br></br> Vamos para o lado reciclável da força?</p>
                </div>
                <div className="membras">
                    <img src="src/assets/Suely.png" alt="foto Suely Maia" />
                    <h2>Suely Maia</h2>
                    <p>Mãe da Lorena e da Bárbara, busca diariamente alternativas mais sustentáveis
                        a serem aplicadas no dia a dia da família Maia, quer ensinar o máximo possível
                        de pessoas os benefícios da coleta seletiva e a importância de se cuidar
                        do meio ambiente.
                    </p>
                </div>
                <div className="membras">
                    <img src="src/assets/Barbara.png" alt="foto Bárbara Maia" />
                    <h2>Bárbara Maia</h2>
                    <p>A geek da família! Ama projetos sociais e a causa animal!! Vai saber te
                        informar de uma forma descontraída e leve o que pode ser feito para aplicar a
                        redução, reutilização e reciclagem em sua rotina diária.</p>
                </div>
            </div>
        </section>
    )
}

export default Equipe