import "./ScrollText.css";

const ScrollText = ({ text }) => (
  <div className="scroll-container">
    <p className="scrollable-name">{text}</p>
  </div>
);

export { ScrollText };
