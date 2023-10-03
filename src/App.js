import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import LayoutUser from './Components/Layout/LayoutUser';
import Login from './Components/Login/Login';
import { publicRoutes, userRoutes } from './Routes/Routes';
import { useSelector } from 'react-redux';
import { UserMiddleware } from './UserMiddleware/UserMiddleware';

function App() {
  const { user } = useSelector((state) => state.counter)
  const { tokenRudex } = useSelector((state) => state.counter)
  console.log(user)
  const navigate = useNavigate()
  return (
    <div className="App">



      <Routes>
        {
          userRoutes?.map((route, id) => {
            return (
              <Route path={route.path}
                element={
                  <UserMiddleware>
                    <LayoutUser>
                      {route.component}
                    </LayoutUser>
                  </UserMiddleware>

                }
                key={id}
              >

              </Route>

            )
          })



        }

        {
          publicRoutes?.map((route, id) => {
            return (
              <Route path={route?.path}
                element={
                  <UserMiddleware>
                    {route?.component}
                  </UserMiddleware>
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
