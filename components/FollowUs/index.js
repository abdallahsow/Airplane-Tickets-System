import Image from "next/image";
import { socialMediaIcons } from "utils/data/footer";
import styles from "./FollowUs.module.scss";

const FollowUs = () => {
  return (
    <div className={styles.socialMedia}>
      {socialMediaIcons.map((id, icon, alt) => (
        <Image src={icon} alt={alt} key={id} />
      ))}
    </div>
  );
};

export default FollowUs;
