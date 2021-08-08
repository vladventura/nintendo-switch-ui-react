import "./ScrollText.css";

const ScrollText = ({ text, showText }) => (
  <div className="scroll-container">
    {showText && <p className="scrollable-name">{text}</p>}
  </div>
);

export { ScrollText };
