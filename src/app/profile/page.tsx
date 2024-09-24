import Image from "next/image";
import "./styles.scss";
import darkProfilePic from "../assets/dark-profile.png";
import lightProfilePic from "../assets/light-profile.png";

export default function Profile() {
  /**
   * selectors
   */
  const currentMode = "light";

  return (
    <div className={`profile-wrapper poppins-bold ${currentMode}`}>
      <h4>Welcome back</h4>
      <h1>benson</h1>
      <Image
        src={currentMode === "light" ? lightProfilePic : darkProfilePic}
        alt={`profile image ${currentMode}`}
      />
      <h3>You stop growing when you stop learning.</h3>
    </div>
  );
}
