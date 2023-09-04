import { Provider } from "react-redux";
import Flight from "./components/Flight";
import Header from "./components/Header";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Flight />
      </Provider>
    </>
  );
}

export default App;
