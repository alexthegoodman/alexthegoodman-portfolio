
import styles from "../sass/AboutMe.module.scss";

const AboutMeCannabis = () => {
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

                    <p>I have been a consumer and friend to cannabis for my whole life. I started growing as soon as it was legal, growing in my closet.
                    </p>
                    <p>Since then, I have learned a lot more through friends, videos, and experience growing. Root rot and mildew are my enemies, while
                        plant vitality and potency are my closest friends.
                    </p>
                    <p>I still have much to learn, but am excited for the potential to &ldquo;grow&ldquo; myself.
                    </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMeCannabis;