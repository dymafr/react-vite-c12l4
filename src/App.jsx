import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import styles from './App.module.scss';
import { seedRecipes } from './data/seed';

seedRecipes();

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;