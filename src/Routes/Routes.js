import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import ProjectManagement from "../Components/ProjectManagement/ProjectManagement";
import UserDashBoard from "../Components/UserDashBoard/UserDashBoard";



const publicRoutes = [
    { path: "/login", component: <Login /> },
  ];


  const userRoutes = [
    { path: "/", component: <Home /> },
    { path: "/user/home", component: <UserDashBoard /> },
    { path: "/user/project", component: <ProjectManagement /> },

  ]

  export {publicRoutes,userRoutes}
