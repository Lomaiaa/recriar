import './cadastro.css'

function Cadastro() {
    return (
        <section id="principal">
            <div class="container cadastro-coluna">
                <div class="cadastro-col-esq">
                    <h1>Inscreva-se e vamos juntxs <br></br>ajudar o meio ambiente</h1>
                <div className='linha'>
                    <span className="linha-1"></span><br></br>
                    <span className="linha-2"></span><br></br>
                    <span className="linha-3"></span>
                </div>
                    <form>
                        <input type="text" placeholder="*Nome" />
                        <input type="email" placeholder="*Email" />
                        <input type="password" placeholder="*Senha" />
                        <div class="caixa-btn">
                            <button class="cadastro-btn">Inscrever-se</button>
                        </div>
                    </form>
                </div>
                <div class="cadastro-col-dir">
                    <img src="src/assets/Colaboração.png" alt="imagem de uma equipe pesquisando" />
                </div>
            </div>
        </section>
    )
}

export default Cadastro