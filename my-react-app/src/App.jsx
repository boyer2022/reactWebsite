// App Component
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx';

function App() {
  
  return(
    // Creating a frgment tag. Set of empty tag brackets
    <>
    {/* The order of Components is the order displayed */}
    {/* Shorthand version: <Header/> */}
    <Header></Header>
      <Food/>
      <Footer/>
      </>
  );
}

export default App
