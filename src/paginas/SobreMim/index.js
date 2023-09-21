import styles from "./SobreMim.module.css"

import PostModelo from "../../componentes/PostModelo"
import fotoCapa from "../../assets/sobre_mim_capa.png"

const SobreMim = () => {
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Rodrigo!
            </h3>

            <img
                src="https://github.com/Rodrigomalavasi.png"
                alt="Foto do Rodrigo Malavasi no espelho"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedor React e estou feliz de te ver por aqui.
            </p>

            <p className={styles.paragrafo}>
                Minha história com programação começou no início de 2023, quando o meu primo começou a me mostrar os projetos dele e falar várias coisas a respeito da área. Eu aprendi um pouco de lógica de programação e o básico da linguagem VBA, porém, sem me aprofundar muito.
            </p>

            <p className={styles.paragrafo}>
                Hoje, estou cursando análise e desenvolvimento de sistemas e fazendo diversos cursos ds áreas de Front-End e Programação, com um maior foco em desenvolvimento com react. Sou realmente um apaixonado por tecnologia e programação.
            </p>

            <p className={styles.paragrafo}>
                Até agora, já desenvolvi diversos projetos Front-End, tanto de estudo como independentes. As principais tecnologias que utilizo, são: React, JavaScript, TypeScript, SCSS, Git, GitHub, HTML e CSS.
            </p>

            <p className={styles.paragrafo}>
                Hoje estou a procura do meu primeiro estágio, afim de iniciar a minha carreira profissional na programação e começar a traçãr uma longa trajetória de desafios, aprendizados e muitos projetos pra conta.
            </p>
        </PostModelo>
    )
}

export default SobreMim
