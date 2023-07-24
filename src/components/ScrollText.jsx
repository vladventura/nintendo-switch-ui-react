import { useEffect, useState } from "react";
import "./ScrollText.css";

const ScrollText = ({ text, showText, className }) => {
  const [longString, setLongString] = useState(false);

  useEffect(() => {
    if (text.length >= 30) setLongString(true);
  }, [text]);

  return (
    <div className={`scroll-container${longString ? " animated-child" : ""} ${className}`}>
      {showText && (
        <p className={`scrollable-name${longString ? " animated-name" : ""}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export { ScrollText };
