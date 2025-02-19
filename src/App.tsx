import { useState } from "react";
import ExchangeRateTable from "./component/table";
import { ExchangeRate, SCREEN } from "./utility/types";
import Update from "./page/update";

function App() {
  const [screen, setScreen] = useState<SCREEN>(SCREEN.HOME);
  const [country, setCountry] = useState<ExchangeRate | any>(null);

  const handleOpenUpdate = (country: string) => {
    setCountry(country);
    setScreen(SCREEN.UPDATE);
  };

  return (
    <>
      {screen === SCREEN.HOME && (
        <>
          <ExchangeRateTable handleOpenUpdate={handleOpenUpdate} />
          {/* <button
            onClick={() => setScreen(SCREEN.CREATE)}
            className="w-8 h-8 bg-[#333] absolute bottom-2 md:bottom-6 right-2 md:right-6 flex justify-center text-align items-center rounded-full"
          >
            <FiPlus color="#fff" />
          </button> */}
        </>
      )}
      {/* {screen === SCREEN.CREATE && (
        <>
          <Create setScreen={setScreen} />
        </>
      )} */}

      {screen === SCREEN.UPDATE && (
        <>
          <Update setScreen={setScreen} country={country} />
        </>
      )}
    </>
  );
}

export default App;
