import { useEffect } from "react";

function Navbar_home({ connectedAccount, address, setConnectedAccount, setEthereumAddress }) {
  const handleDisconnect = () => {
    setConnectedAccount(false);
    setEthereumAddress("");
    localStorage.removeItem("connectedAccount");
    localStorage.removeItem("ethereumAddress");
  };

  useEffect(() => {
    const previouslyConnectedAccount = localStorage.getItem("connectedAccount");
    const previouslyConnectedAddress = localStorage.getItem("ethereumAddress");

    if (previouslyConnectedAccount === "true" && previouslyConnectedAddress) {
      setConnectedAccount(true);
      setEthereumAddress(previouslyConnectedAddress);
    }
  }, [setConnectedAccount, setEthereumAddress]);

  const setAccountAndAddressInStorage = (connected, address) => {
    localStorage.setItem("connectedAccount", connected.toString());
    localStorage.setItem("ethereumAddress", address);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Courier Service</span>
      </div>
      <div className="text-white">
        {connectedAccount ? (
          <>
            Connected Account: {address}
            {/* <button
              onClick={() => {
                handleDisconnect();
                setAccountAndAddressInStorage(false, "");
              }}
              className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Disconnect
            </button> */}
          </>
        ) : (
          <>
            Not Connected
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar_home;
