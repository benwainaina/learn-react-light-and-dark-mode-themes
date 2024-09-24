import "./styles.scss";

export default function Home() {
  /**
   * selectors
   */
  const mode = "light";
  return (
    <div className={`wrapper ${mode}`}>
      <h1 className="poppins-bold">Home</h1>
      <p className="poppins-regular">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse
        aliquam quaerat voluptas sequi ratione obcaecati. Esse veniam
        perferendis sint necessitatibus ipsum quia deleniti ex labore architecto
        explicabo, nemo fugit.
      </p>
      <p className="poppins-regular">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse
        aliquam quaerat voluptas sequi ratione obcaecati. Esse veniam
        perferendis sint necessitatibus ipsum quia deleniti ex labore architecto
        explicabo, nemo fugit.
      </p>

      <div className="go-to-profile poppins-bold">Hover To See The Effect</div>
    </div>
  );
}
