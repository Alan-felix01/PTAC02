import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        
        <footer className={styles.rodape}>
             <Link href="https://ead.ifms.edu.br/">
             <Image
                width={100}
                height={100}
                src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"} />
                </Link>
        <h1>footer</h1>
        </footer>
    );
    
}