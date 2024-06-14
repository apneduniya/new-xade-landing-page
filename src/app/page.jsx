import FeaturesSection from "@/components/section/FeaturesSection";
import { HeroSection } from "@/components/section/HeroSection";
import { StatsSection } from "@/components/section/StatsSection";
import styles from "@/styles/pages/home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
      </main>
    </>
  );
}
