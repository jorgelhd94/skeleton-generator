import Canva from "./components/molecules/Canva/Canva";
import SimpleLayout from "./components/templates/SimpleLayout/SimpleLayout";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <SimpleLayout>
        <Canva />
      </SimpleLayout>
    </>
  );
}

export default App;
