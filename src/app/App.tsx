import "./App.scss"
import { AboutUs } from "../ui/components/about/AboutUs"
import { Footer } from "../ui/components/footer/Footer"
import { Header } from "../ui/components/header/Header"
import { Insurance } from "../ui/components/Insurance/Insurance"
import { Main } from "../ui/components/services/Main"
import { TransportSolutions } from "../ui/components/transportation-goods/TransportSolutions"

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Main />
      <TransportSolutions />
      <Insurance />
      <Footer />
    </div>
  )
}

export default App
