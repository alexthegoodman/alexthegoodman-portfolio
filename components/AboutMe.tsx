
import styles from "../sass/AboutMe.module.scss";

const AboutMe = () => {
    return (
        <>
            <section className={styles.aboutMe}>
                <div className={styles.inner}>
                    <div className={styles.profileOuter}>
                                                <h1>About Me</h1>

                        <img className={styles.profile} alt="Alex Woodman | AlexTheGoodman | Profile Picture" src="/img/me.jpg" />

                    </div>
                    <div className={styles.content}>
                                                <h2>Alex Woodman (aka Goodman)</h2>

                    <p>I got my start very young as a boy designing operating systems and video games. I quickly began to program and challenged myself year after year.
                        Eventually, I started building things of value, and by the time I graduated high school, I had a small portfolio of successful projects.
                    </p>
                    <p>Fast-forward 10+ years, and here I am working on continuously more advanced project types and significant scope. C++ was my very first programming language and remains 
                        my overall favorite, closely followed by TypeScript and Rust. I have always enjoyed reading, everything from UX to DevOps, from rendering to AI.
                    </p>
                    <p>I&apos;m also an avid gamer myself. Some great picks include Fallout, Far Cry, and my childhood favorite, Fable. I strive to help people who want to create all kinds of interactive
                        experiences, including games.
                    </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe;