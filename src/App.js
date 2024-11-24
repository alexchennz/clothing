import './App.css';
import Header from './components/Header';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from './components/ProductDetails';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <div className="container mx-auto flex flex-col gap-8 bg-white font-sans mt-4">
        <Header />
        <main>
          <ProductDetails />
        </main>
        <ToastContainer />
      </div>
    </CartProvider>
  );
}

export default App;
