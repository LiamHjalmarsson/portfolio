import Navigation from "./Layouts/Navigation/Navigation";
import Root from "./Pages/root";
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className='font-roboto min-h-[100vh] bg-dark_600 text-whiteish'>
          <Navigation />
          <main className='w-full flex flex-col items-center justify-center'>
            <Root />
          </main>
      </div>
    </>
  );
}

export default App
