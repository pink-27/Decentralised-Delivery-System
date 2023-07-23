import Home from "./Home/Home";
import Sidebar from "./Home/Sidebar";
function Homelayout({connectedAccount }){
    return (
        <div className="flex">
          <Sidebar />
          <Home connectedAccount={connectedAccount} />
        </div>
      );
}
export default Homelayout