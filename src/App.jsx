import Banner from "./Banner/Banner"
import Hero from "./component/Hero"
import ContactPage from "./contact/ContactPage"
import Footer from "./Footer/Footer"

import Section from "./sec/Section"

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center  ">

    <Hero/>
    <Section/>
    <ContactPage/>
    <Banner/>
    <Footer/>
    
    
    
    </div>
  )
}

export default App