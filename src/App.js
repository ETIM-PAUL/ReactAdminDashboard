import React, { } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { SideBar } from './components/SideBar';
import { NavBar } from './components/NavBar';
import { useStateContext } from './contexts/'
import { AdminDashboard } from './containers/AdminDashboard';
import { Patients } from './containers/Patients';
import { Employees } from './containers/Employees';
import { Appointments } from './containers/Appointments';
import "./App.css";

function App() {
  const { state } = useStateContext()
  const { activeMenu } = state
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div
            className="fixed right-4 bottom-4"
            style={{
              zIndex: '1000',
            }}
          >
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-[50%]" style={{ backgroundColor: 'blue' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"><SideBar /></div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <SideBar />
            </div>
          )}
          <div className={`dark:bg-main-bg bg-main-bg min-h-10 w-full ${activeMenu ? 'md:ml-72 ' : 'flex-2'}`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar full"><NavBar /></div>

            <div>
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/appointments" element={<Appointments />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
