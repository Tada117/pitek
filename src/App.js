import "./App.scss";
import BackButton from "./components/BackButton";
import ItemList from "./components/ItemList";
import TierCard from "./components/TierCard";
import { data } from "data.js";
import Menu from "components/Menu";

function App() {
  return (
    <div className="App">
      <header>
        <div className="white-layer" />
        <BackButton />
        <div className="header-title">
          <h3>Silver Tier</h3>
          <p>
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </p>
        </div>
        <div className="tier-card">
          <TierCard />
        </div>
      </header>
      <div className="app-body">
        {data?.map((item) => (
          <ItemList title={item?.title} data={item?.data} />
        ))}
      </div>
      <Menu />
    </div>
  );
}

export default App;
