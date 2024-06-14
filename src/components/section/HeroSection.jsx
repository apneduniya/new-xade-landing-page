import styles from "@/styles/section/hero.module.css";
import { heroSectionContents } from "@/assets/data/hero_section_contents";


export function HeroSection() {
    return (
        <>
            <section className={styles.container}>
                <video autoPlay muted loop className={styles.bgVideo}>
                    <source src={heroSectionContents.bgVideo} type="video/mp4" />
                    Your browser does not support video.
                </video>
                <div className={styles.contentContainer}>
                    <h1 className={styles.title}>
                        THE ULTIMATE <br /> TRADING <br /> EXPERIENCE
                    </h1>
                    <p className={styles.description}>
                        All the good stuff DeFi has to offer within one simple mobile app
                        that makes trading fun and easy
                    </p>
                </div>
            </section>
        </>
    )
}

