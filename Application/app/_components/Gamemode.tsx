type PlayerType = 'human' | 'ai' | null
import styles from './Gamemode.module.css'

export default function Gamemode(props: { variant: string, playerType: any[] }) {
    return (
        <div className={styles.gamemodeContainer}>
            <div className={`${styles.playerTypeContainer} ${styles.traditional}`}><i className="fa-solid fa-user-large"></i></div>
            {/* <div className={`${styles.playerTypeContainer} ${styles.traditional}`}><i className="fa-solid fa-user-large"></i></div> */}
            {/* <div className={styles.playerTypeContainer}><i className="fa-solid fa-user-large"></i></div> */}
            {/* <div className={styles.playerTypeContainer}><i className="fa-solid fa-user-large"></i></div>
            <div className={styles.playerTypeContainer}><i className="fa-solid fa-user-large"></i></div> */}
        </div>
    )
}