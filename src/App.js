import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutUser from './Components/Layout/LayoutUser';
import Login from './Components/Login/Login';
import { userRoutes , homeRoutes} from './Routes/Routes';
import { useSelector } from 'react-redux';
import { UserMiddleware } from './UserMiddleware/UserMiddleware';
import HomeLayout from './Components/Layout/HomeLayout';
import SignUP from './Components/SignUp/SignUp';

function App() {
  const token = useSelector((state)=> state.counter)
  console.log(token)
 
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
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
                  //  </UserMiddleware>
                  
                }
                  key={id}
              >

              </Route>

            )
          })
        },
        {
          homeRoutes?.map((route, id) => {
            return(
              <Route path={route.path}
                element={
                  <HomeLayout>
                    {route.component}
                  </HomeLayout>
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
