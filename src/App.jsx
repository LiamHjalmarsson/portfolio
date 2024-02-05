import Navigation from "./Components/Layouts/Navigation/Navigation";
import Root from "./Pages/root";

function App() {
  return (
    <>
      <div className='font-roboto bg-nobel_600 text-whiteish'>
          <Navigation />
          <main className='w-full flex items-center justify-center'>
            <Root />
          </main>
      </div>
    </>
  );
}

export default App
