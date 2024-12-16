const GymClass = ({ gymName, gymDay, gymImage, gymTime }) => {
  return (
    <div className="home-gym-class">
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
