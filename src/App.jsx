import DontKnow from "./components/dont-know/Dont-know";
import NewProduct from "./components/new-product/New-product";

const App = () => {
  return (
    <div className="container">
      <NewProduct />
      <DontKnow />
    </div>
  );
};

export default App;
