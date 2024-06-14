import styles from '@/styles/layout/footer.module.css';
import { footerContents } from '@/assets/data/footer_layout_contents';
import Link from 'next/link';


export function FooterLayout() {
    return (
        <>
            <footer className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className={styles.firstContentContainer}>
                        <span className={styles.logo}>{footerContents.logo}</span>
                        <p className={styles.description}>{footerContents.description}</p>
                        <div className={styles.contactDetailsContainer}>
                            <h3>CONTACT US</h3>
                            <Link href={`mailto:${footerContents.email}`}>{footerContents.email}</Link>
                            <address>{footerContents.address}</address>
                        </div>
                    </div>
                    {
                        footerContents.links.map((link, index) => {
                            return (
                                <div key={index} className={styles.linkContainer}>
                                    <h3>{link.heading}</h3>
                                    <ul>
                                        {
                                            link.items.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Link href={item.link}>{item.name}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.extraContentContainer}>
                    <span>© {new Date().getFullYear()} Xade Technologies FZCO - All Rights Reserved</span>
                    <p>Xade is not an authorised or licensed bank in any jurisdictions nor does it have any licenses to provide financial services in any jurisdictions.
                        We are a non custodial platform and we are not liable for any actions of our users or any losses incurred on our platformX</p>
                </div>
            </footer>
        </>
    )
}



