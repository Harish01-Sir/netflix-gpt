import { Provider } from "react-redux"
import appStore from "./redux/appStore"
import Body from "./components/Body"


function App() {
  return (
    <>
    <Provider store={appStore}>
      <Body/>
    </Provider>
    </>
  )
}

export default App
