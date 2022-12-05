import "./App.scss"
import { AboutUs } from "./ui/components/about/AboutUs"
import { Footer } from "./ui/components/footer/Footer"
import { Header } from "./ui/components/header/Header"
import { Insurance } from "./ui/components/Insurance/Insurance"
import { Main } from "./ui/components/services/Main"
import { Goods } from "./ui/components/transportation-goods/Goods"

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Main />
      <Goods />
      <Insurance />
      <Footer />
    </div>
  )
}

export default App
