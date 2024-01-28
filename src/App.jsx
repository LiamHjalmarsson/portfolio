import Root from "./Pages/root";
import Navigation from "./Components/Layouts/Navigation/Navigation";
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className='font-roboto min-h-[100vh] bg-nobel_600 text-whiteish'>
          <Navigation />
          <main className='w-full flex flex-col items-center justify-center'>
            <Root />
          </main>
      </div>
    </>
  );
}

export default App
