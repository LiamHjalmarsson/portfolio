import Navigation from "./Layouts/Navigation/Navigation";
import Root from "./Pages/root";

function App() {
  return (
    <div className='font-roboto min-h-[100vh] bg-dark_500 text-whiteish'>
        <Navigation />
        <main className='w-full flex flex-col items-center justify-center'>
          <Root />
        </main>
    </div>
  );
}

export default App
