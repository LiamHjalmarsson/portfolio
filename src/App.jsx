import Root from "./Pages/root";
import Navigation from "./Components/Layouts/Navigation/Navigation";

function App() {
  return (
    <>
      <div className='font-roboto bg-nobel_600 text-whiteish'>
          <Navigation />
          <main className='w-full flex flex-col items-center justify-center'>
            <Root />
          </main>
      </div>
    </>
  );
}

export default App
