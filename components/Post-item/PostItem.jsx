import Image from "next/image";
import Heading from "../Heading/Heading";
import styles from "./PostItem.module.scss";

const PostItem = () => {
    return (
        <div className={styles.post__item}>
            <Heading tag="h2" text="First post title"/>
            <Image className={styles.post__image} src="" alt="image" width="150" height="200"></Image>
            <p className={styles.post__intro}>
                 Data fetching in Next.js allows you to render your content in different ways, depending on your application use case.
            </p>
        </div>
    )
}

export default PostItem;