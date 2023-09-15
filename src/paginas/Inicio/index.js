import styles from "./Inicio.module.css"

import posts from "../../assets/json/posts.json"
import PostCard from "../../componentes/PostCard"

const Inicio = () => {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post}>

                    </PostCard>
                </li>
            ))}
        </ul>
    )
}

export default Inicio