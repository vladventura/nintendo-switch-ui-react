import "./ScrollText.css";
import Ticker from "react-ticker";

const ScrollText = ({ text, showText }) => (
  <div className="scroll-container">
    {
      <Ticker direction="toLeft" mode="smooth">
        {() => <p className="">{text}</p>}
      </Ticker>
    }
  </div>
);

export { ScrollText };
