import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import App from "./app/App"
import { store } from "./bll/store/store"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)

reportWebVitals()
