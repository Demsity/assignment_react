import './CSS/styles.min.css';
import Navbar from './Components/Navbar/Navbar'
import Showcase from './Components/Showcase/Showcase'
import PromoBanner from './Components/PromoBanner/PromoBanner';

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <PromoBanner />

    {/* Enable site scrolling */}
      <div style={{'height': '2000px'}}></div>
    </>
  );
}

export default App;
