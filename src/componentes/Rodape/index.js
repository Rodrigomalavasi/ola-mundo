import styles from "./Rodape.module.css"
import { ReactComponent as MarcaRegistrada } from "../../assets/marca-registrada.svg";

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />       
            Desenvolvido por Rodrigo Malavasi. 
        </footer>
    )
}

export default Rodape