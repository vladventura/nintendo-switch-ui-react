import "./App.css";
import { Screen } from "./Screen";
import { useContext, useEffect } from "react";

import { ThemeDataContext } from "./context/themeContext";

function App() {

  const { loadTheme } = useContext(ThemeDataContext);

  useEffect(() => {
    loadTheme();
  }, [loadTheme])

  return <Screen />

}

export default App;
