
import Hero from "./component/Hero"
import ContactPage from "./contact/ContactPage"
import Footer from "./Footer/Footer"

import Section from "./sec/Section"

const App = () => {
  return (
    <div className="flex flex-col  ">

    <Hero/>
    <Section/>
    <ContactPage/>
   
    <Footer/>
    
    
    
    </div>
  )
}

export default App