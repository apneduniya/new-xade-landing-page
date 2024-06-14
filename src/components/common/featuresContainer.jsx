import Image from "next/image";
import styles from "@/styles/common/features_container.module.css";

export default function FeaturesContainer(props) {
    return (
        <>
            <div className={styles.container} style={props.id % 2 === 0 ? { flexDirection: "row-reverse" } : {}}>
                <Image src={props.img} alt={props.title} />
                <div className={styles.contentContainer}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}


