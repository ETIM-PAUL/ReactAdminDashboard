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
import { HiSun, HiMoon } from "react-icons/hi";
import { TasksManager } from './containers/TaskManager';
import "./App.css";
import { Footer } from './components/Footer';

function App() {
  const { state, dispatch } = useStateContext()
  const { activeMenu, theme } = state
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div
            className="fixed right-4 bottom-4"
            style={{
              zIndex: '1000',
            }}
          >
            <TooltipComponent content="Theme Settings" position="Top">
              <div className="mt-2 py-2 px-3 rounded-2xl bg-gray-500 dark:bg-half-transparent">
                <div className="flex gap-3">
                  <span
                    className={`font-semibold flex items-center ${theme === "light" ? "text-[black]" : "text-[white]"}`}
                  >
                    {theme === "light" ? "Light mode" : "Dark mode"}
                  </span>
                  <button
                    className={`mode-button flex justify-between items-center ${theme === "light" ? "light-mood-button" : "dark-mood-button"}`}
                  >
                    <HiSun
                      className={`text-4xl ${theme === "light" ? "sun-light" : "sun-dark"}`}
                      onClick={() => {
                        dispatch({ type: "setTheme", payload: "light" })

                      }}
                    />
                    <HiMoon
                      className={`text-4xl ${theme === "light" ? "moon-light" : "moon-dark"}`}
                      onClick={() =>
                        dispatch({ type: "setTheme", payload: "dark" })
                      }
                    />
                  </button>
                </div>
              </div>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"><SideBar /></div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <SideBar />
            </div>
          )}
          <div className={`dark:bg-secondary-dark-bg bg-main-bg  w-full ${activeMenu ? 'md:ml-72 ' : 'flex-2'}`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"><NavBar /></div>

            <div className='mt-24 md:mt-0'>
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/tasks-manager" element={<TasksManager />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className={`shadow-md w-full pt-5 h-16 dark:bg-main-dark-bg bg-white`}>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
