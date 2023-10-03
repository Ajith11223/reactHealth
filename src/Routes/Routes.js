import FeasibilityList from "../Components/FeasibiltyList/FeasibilityList";
import AssumptionIncome from "../Components/FeasibiltyReport/AssumptionIncome/AssumptionIncome";
import FeasibiltyReport from "../Components/FeasibiltyReport/FeasibiltyReport";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import ProjectManagement from "../Components/ProjectManagement/ProjectManagement";
import SignUP from "../Components/SignUp/SignUp";
import UserDashBoard from "../Components/UserDashBoard/UserDashBoard";



const publicRoutes = [
    { path: "/login", component: <Login /> },
    { path: "/signup", component: <SignUP/>}
  ];


  const userRoutes = [
    { path: "/user/project", component: <ProjectManagement /> },
    { path: "/user/project/:id", component: <FeasibilityList /> },
    { path: "/user/project/:id/:fid", component: <FeasibiltyReport /> },
    { path: "/user/project/:id/:fid/assumptionIncome", component: <AssumptionIncome/> },

  ]

  const homeRoutes = [
    { path: "/user/home", component: <Home /> },

  ] 

  export {publicRoutes,userRoutes,homeRoutes}
