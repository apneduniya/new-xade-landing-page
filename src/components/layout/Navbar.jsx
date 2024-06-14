"use client"

import styles from '@/styles/layout/navbar.module.css';
import { navbarContents } from '@/assets/data/navbar_layout_contents';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export function NavbarLayout() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) { // Replace 200 with the desired number of pixels
                setHasScrolled(true);
                return;
            }
            setHasScrolled(false);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);


    return (
        <>
            <nav className={`${styles.navContainer} ${hasScrolled && styles.navContainerScrolled}`}>
                <span className={styles.navLogo}>{navbarContents.logo}</span>
                <div className={styles.navLinksContainer}>
                    {
                        navbarContents.links.map((link, index) => {
                            return (
                                <Link key={index} href={link.url} className={styles.navLink}>{link.name}</Link>
                            )
                        })
                    }
                </div>
            </nav>
        </>
    )
}



