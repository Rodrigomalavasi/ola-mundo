import { Link } from "react-router-dom"
import styles from "./PostCard.module.css"
import BotaoPrincipal from "../BotaoPrincipal"

const PostCard = ({ post }) => {

    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem da capa do post"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <BotaoPrincipal>
                    Ler
                </BotaoPrincipal>
            </div> 
        </Link>
    )
}

export default PostCard