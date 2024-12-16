const GymClass = ({ gymName, gymDay, gymImage, gymTime, isWide }) => {
  return (
    <div
      className={
        isWide ? "home-gym-class home-gym-class-extended" : "home-gym-class"
      }
    >
      <div
        className="gym-class-image"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${gymImage.src})`,
          // filter: "brightness(70%)",
        }}
      ></div>
      <div className="home-gym-class-text">
        <h3>{gymName}</h3>
        <p>
          {gymDay} - {gymTime}
        </p>
      </div>
    </div>
  );
};

export default GymClass;
