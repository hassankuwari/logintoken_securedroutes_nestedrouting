import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/CustomNavbar';
import CustomLogin from './Components/CustomLogin';
import CustomProfile from './Components/CustomProfile';
import Home from './Components/Home';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import PrivateRoutes from './Components/PrivateRoutes';
import CustomeDashboard from './Components/CustomeDashboard';
import PageLayout from './Components/PageLayout';
import CustomSidebar from './Components/CustomSidebar';
import Dashboard1 from './Components/Dashboard1';
import Dashboard2 from './Components/Dashboard2';
import Taskmanager from './Components/Taskmanager';
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<CustomLogin />} ></Route>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/features' element={<Features />} ></Route>
          <Route path='/pricing' element={<Pricing />} ></Route>

          <Route path='/customlogin' element={<CustomLogin />} ></Route>

          <Route element={<PrivateRoutes />}>
            {/* <Route path='/customprofile' element={<CustomProfile/>} ></Route>  */}
            {/* <Route path='/customdashboard' element={<CustomeDashboard/>} ></Route>  */}
            <Route path='/pagelayout' element={<PageLayout />} >

              <Route path='customprofile' element={<CustomProfile />} />

              <Route path='customdashboard' element={<CustomeDashboard />}>
                <Route path='dashboard1' element={<Dashboard1 />} />
                <Route path='dashboard2' element={<Dashboard2 />} />
              </Route>

              <Route path='taskmanager' element={<Taskmanager />}>
                <Route path='task1' element={<Task1 />} />
                <Route path='task2' element={<Task2 />} />
              </Route>

            </Route>
          </Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
