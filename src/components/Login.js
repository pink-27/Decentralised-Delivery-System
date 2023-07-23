import { Link,  Navigate } from "react-router-dom";
const ethers = require("ethers");

async function ConnectMetamask(setAccount, setaddress) {
  if (typeof window.ethereum !== "undefined") {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("Metamask connected!", accounts);
    setAccount(true);
    setaddress(accounts[0]);
    localStorage.setItem("connectedAccount", true);

    localStorage.setItem("connectedAccount", accounts[0]);

    console.log(accounts[0])
  
  } else {
    console.log("No Metamask here!");
  }
}

function Login({ setAccount, setaddress, isConnected }) {
  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
  const wallet = new ethers.Wallet(
    "0xd1399086713f53139afd2670fdca79d58a32814d12f9dfbaf33ebc441d612788",
    provider
    
  );
  console.log(isConnected)
  if(isConnected){
    return <Navigate replace to="/home" />;
  }
  return (
    <>
      <Link
        id="login-btn"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => ConnectMetamask(setAccount, setaddress)}
      >
        {isConnected ? (
          <>
            Visit your home page!
          
          </>
        ) : (
          <>
            Connect to mask!!
          </>
        )}
      </Link>
    </>
  );
}

export default Login;
