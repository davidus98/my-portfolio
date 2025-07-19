import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <>
        <section id="footer">
            <footer className={styles.footer}>
                <p>Built and designed by David Boros.</p>
                <p> All rights reserved. ©</p>
            </footer>
        </section>
        </>
    );
}

export default Footer;
