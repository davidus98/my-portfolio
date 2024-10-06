import React from 'react'; // Import React
import profilePic from '../assets/profile.jpeg'; // Ensure the image path is correct
import styles from './Card.module.css'; // Import CSS module

function Card() {
    return (
        <div className={styles.card}> {/* Use className instead of inline style */}
            <img className={styles.cardImage} src={profilePic} alt="profile" /> {/* Adjusted to use CSS module */}
        </div>
    );
}

export default Card;
