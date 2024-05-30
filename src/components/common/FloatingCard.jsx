import React, { useState } from 'react';
import styles from './FloatingCard.module.css'; // Import the CSS file

const FloatingCard = ({ img, title, content,tag }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleCard = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={styles.floatingCard} onClick={toggleCard}>
            <div className="eg-card1">
                <div className="card-img magnetic-item">
                    <img src={img} alt="" style={{
                        maxHeight: "200px",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                </div>
                <div className="card-content">
                    <a>{tag} <span />
                    </a>
                    <h5>
                        <a>{title}</a>
                    </h5>
                    {isVisible ? <p> {content} </p> : null}
                </div>
            </div>
        </div>
    );
};

export default FloatingCard;
