import ComingSoon from "./components/organisms/ComingSoon/ComingSoon";
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
        {/* <ComingSoon /> */}
      </SimpleLayout>
    </>
  );
}

export default App;
