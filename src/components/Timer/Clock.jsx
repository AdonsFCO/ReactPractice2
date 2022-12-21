import "./Clock.css";
const clock = ({ currentTime }) => {
  return (
    <>
      <h2>This is the current time:</h2>
      <p className="clock">{currentTime}</p>
    </>
  );
};

export default clock;
