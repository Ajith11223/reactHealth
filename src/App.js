import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutUser from './Components/Layout/LayoutUser';
import Login from './Components/Login/Login';
import { userRoutes } from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        {
          userRoutes?.map((route, id) => {
            return (


              <Route path={route.path}
                element={
                  <LayoutUser>
                    {route.component}
                  </LayoutUser>
                  
                }
                  key={id}
              >

              </Route>

            )
          })
        }


      </Routes>
    </div>
  );
}

export default App;
