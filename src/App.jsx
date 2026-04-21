import './App.css'; // Dono 'src' mein hain, isliye single dot
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Allroutes from './routes/Allroutes';

function App() {
  return (
    <>
      <Navbar /> 
      <Allroutes /> 
      <Footer />
    </>
  );
}

export default App;