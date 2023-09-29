import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutUser from './Components/Layout/LayoutUser';
import Login from './Components/Login/Login';
import { userRoutes } from './Routes/Routes';
import { useSelector } from 'react-redux';
import { UserMiddleware } from './UserMiddleware/UserMiddleware';

function App() {
  const token = useSelector((state)=> state.counter)
  console.log(token)
 
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
                  // <UserMiddleware>

                  <LayoutUser>
                    {route.component}
                  </LayoutUser>
                  // </UserMiddleware>
                  
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
