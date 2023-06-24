import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";


function App() {
  console.log("hello");
  return (
   <BrowserRouter >
     <div>
      <Header />
      <Content />
      <Footer />
    </div>
   </BrowserRouter>
  )
}

export default App;