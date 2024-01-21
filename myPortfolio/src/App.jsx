import Navigation from "./Layouts/Navigation/Navigation";
import Profile from "./Pages/Profile/Profile";
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <div className='font-roboto min-h-[100vh] text-slate-200 bg-slate-800'>
        <Navigation />
        <div className='w-full flex flex-col items-center justify-center'>
          <div className="w-full max-w-[1300px]">
              <div className="h-screen" id="home">
                <Profile />
              </div>
              <div className="h-screen" id="about"> 
                <Resume />
              </div>
          </div>
        </div>
    </div>
  );
}

export default App
