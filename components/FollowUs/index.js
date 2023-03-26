import Image from "next/image";
import { socialMediaIcons } from "utils/data/footer";
import styles from "./FollowUs.module.scss";

const FollowUs = () => {
  return (
    <div className={styles.socialMediaIcons}>
      {socialMediaIcons.map(({ id, src, alt }) => (
        <div key={id} className={styles.socialMediaIcon}>
          <Image src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
};

export default FollowUs;
