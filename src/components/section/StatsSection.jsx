import styles from "@/styles/section/stats.module.css";
import { statsSectionContents } from "@/assets/data/stats_section_contents";


export function StatsSection() {
    return (
        <>
            <section className={styles.container}>
                {
                    statsSectionContents.data.map((item, index) => {
                        return (
                            <div key={index} className={styles.statsItemContainer}>
                                <span style={{background: item.valueColor, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent"}}>{item.value}</span>
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}


