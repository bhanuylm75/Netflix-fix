import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./components/Store"


function App() {
  return (
    <div className="h-screen">
      <Provider store={store}>
      <Body/>
      </Provider> 
    </div>
  );
}

export default App;
