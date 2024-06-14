import styles from "@/styles/section/features.module.css";
import { featuresSectionContents } from "@/assets/data/features_section_contents";
import FeaturesContainer from "../common/featuresContainer";

export default function FeaturesSection() {
    return (
        <>
            <section>
                {
                    featuresSectionContents.features.map((feature, index) => (
                        <FeaturesContainer key={index} id={index +1} img={feature.img} title={feature.title} description={feature.description} />
                    ))
                }
            </section>
        </>
    )
}

