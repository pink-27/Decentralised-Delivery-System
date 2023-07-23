import Navbar from "./components/Navbars/Navbar";
import Navbar_login from "./components/Navbars/Navbar_login";
import Landing from "./components/Landing";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import ShippingPage from "./components/ShippingPage";
import Navbar_home from "./components/Navbars/Navbar_home";
import { useState } from "react";
import Homelayout from "./components/Homelayout";
function App() {
  
  // const previouslyConnectedAccount = localStorage.getItem("connectedAccount");
  const [connectedAccount, setConnectedAccount] = useState(
    ""
    );
    

  const [ethereumAddress, setEthereumAddress] = useState("");
  return (
    <>
      <Routes>
        <Route path="/" element={[<Navbar />, <Landing />]} />
        <Route
          path="/login"
          element={[
            <Navbar_login />,
            <Login
              setAccount={setConnectedAccount}
              setaddress={setEthereumAddress}
              isConnected={connectedAccount}
            />,
          ]}
        />
        <Route
          path="/home"
          element={[
            <Navbar_home
              connectedAccount={connectedAccount}
              address={ethereumAddress}
              setConnectedAccount={setConnectedAccount}
              setEthereumAddress={ setEthereumAddress}
              />,
              <Homelayout connectedAccount={connectedAccount}/>,
          ]}
        />
        <Route path="/ship" element={[<ShippingPage />]} />
      </Routes>
    </>
  );
}

export default App;
