import userPic from "../assets/user.jpg"
import Styles from "./Card.module.css"

const Card = () => {
    return (
        <div className={Styles.card}>
            <img className={Styles.cardImage} src={userPic} alt="user image" />
            <h2 className={Styles.cardTitle}>User Name</h2>
            <p className={Styles.cardText}>Description about user like profession, hobby, etc.,</p>
        </div>
    )
}

export default Card
