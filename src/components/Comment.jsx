import { ThumbsUp, Trash } from 'phosphor-react';
import styles from '../components/Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }){
    function handleDeleteComment() {
        onDeleteComment(content);
    }
    
    return(
        <div className={styles.comment}>
            <Avatar hasBorder="false" src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="15 de maio as 08h30" dateTime="2024-05-15 07:29:00">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>  
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}