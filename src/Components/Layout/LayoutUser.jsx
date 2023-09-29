import {
  SidebarComponent,
  TreeViewComponent,
} from "@syncfusion/ej2-react-navigations";
import React from "react";
import SidebarData from "../SideBar/SideBarData";
import { BiChevronLeft } from "react-icons/bi";
import NavIcon from "../../Images/NavIcon.png";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";

const LayoutUser = ({ children }) => {
  let sidebarobj;
  let treeviewobj;
  let data = [
    {
      nodeId: "01",
      nodeText: "Dashboard",
      iconCss: "<RxDashboard/>",
      // nodeChild: [
      //     { nodeId: '05-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '05-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '05-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '05-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '05-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '05-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
      // ]
    },
    {
      nodeId: "02",
      nodeText: "Project Management",
      iconCss: "icon-thumbs-up-alt icon",
    },
    {
      nodeId: "03",
      nodeText: "Policy & Procedure",
      iconCss: "icon-docs icon",
    },
    {
      nodeId: "04",
      nodeText: "Jobs",
      iconCss: "icon-th icon",
      // nodeChild: [
      //     { nodeId: '04-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '04-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '04-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '04-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '04-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '04-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
      // ]
    },
    {
      nodeId: "05",
      nodeText: "Training",
      iconCss: "icon-code icon",
      // nodeChild: [
      //     { nodeId: '05-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '05-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '05-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '05-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '05-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
      //     { nodeId: '05-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
      // ]
    },
    {
      nodeId: "06",
      nodeText: "Articles",
      iconCss: "icon-chrome icon",
    },
    {
      nodeId: "07",
      nodeText: "Users",
      iconCss: "icon-up-hand icon",
    },
    {
      nodeId: "08",
      nodeText: " Fesility Planning",
      iconCss: "icon-bookmark-empty icon",
    },
  ];
  let width = "250px";
  let target = ".main-content";
  let mediaQuery = "(min-width: 600px)";
  let dockSize = "44px";
  let fields = {
    dataSource: data,
    id: "nodeId",
    text: "nodeText",
    child: "nodeChild",
    iconCss: "iconCss",
  };
  function onCreate() {
    sidebarobj.element.style.visibility = "";
  }
  function onClose() {
    treeviewobj?.collapseAll();
  }
  function toggleClick() {
    if (sidebarobj?.isOpen) {
      sidebarobj?.hide();
      treeviewobj?.collapseAll();
    } else {
      sidebarobj?.show();
      treeviewobj?.expandAll();
    }
  }
  let sidbarToggle = null;
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };
  const blue = {
    100: "#DAECFF",
    200: "#99CCF3",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  const StyledListbox = styled("ul")(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    box-shadow: 0px 4px 30px ${
      theme.palette.mode === "dark" ? grey[900] : grey[200]
    };
    z-index: 1;
    `
  );

  const StyledMenuItem = styled(MenuItem)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${menuItemClasses.focusVisible} {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${menuItemClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${menuItemClasses.disabled}) {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
    `
  );

  const TriggerButton = styled(MenuButton)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    border-radius: 12px;
    padding: 8px 14px;
    line-height: 1.5;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }
  
    &:focus-visible {
      border-color: ${blue[400]};
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
    `
  );
  return (
    // Sidebar Element Declaration
    <div className="control-section">
      <div id="wrapper">
        <title>
          Essential JS 2 for React - Sidebar {">"} Sidebar with ListView{" "}
        </title>
        <div
          className="col-lg-12 col-sm-12 col-md-12"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            className="main-header"
            id="header-section"
            style={{ minHeight: "80px" }}
          >
            <nav className=" p-5 flex justify-between items-center border-b border-gray-300">
              <img
                src={<NavIcon />}
                alt="Icon"
                width={210}
                height={36.13}
                className=""
              />
              <div className="flex items-center space-x-2">
                <Dropdown>
                  <TriggerButton className="flex items-center">
                    
                    <span className="text-lg font-bold">name</span>
                    <img
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmR1VLcPa0aFfNClulnJQOD2GR9Nxw-3AEFvSg9ss&s"
                      }
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                  </TriggerButton>
                  <Menu slots={{ listbox: StyledListbox }}>
                    <StyledMenuItem onClick={createHandleMenuClick("Profile")}>
                      Profile
                    </StyledMenuItem>
                    <StyledMenuItem
                      onClick={createHandleMenuClick("Language settings")}
                    >
                      Language settings
                    </StyledMenuItem>
                    <StyledMenuItem onClick={createHandleMenuClick("Log out")}>
                      Log out
                    </StyledMenuItem>
                  </Menu>
                </Dropdown>
              </div>
            </nav>
          </div>
          <SidebarComponent
            id="sidebar-treeview"
            ref={(Sidebar) => (sidebarobj = Sidebar)}
            width={width}
            target={target}
            mediaQuery={mediaQuery}
            style={{ visibility: "hidden" }}
            className="z-50"
            created={onCreate}
            close={onClose}
            dockSize={dockSize}
            enableDock={true}
          >
            <div className="main-menu" style={{ zIndex: "999" }}>
              <div>
                {/* <TreeViewComponent id='main-treeview'  ref={Treeview => treeviewobj = Treeview} fields={"abccc"} expandOn='Click' /> */}
                {/* <TreeViewComponent id='main-treeview' ref={Treeview => treeviewobj = Treeview} fields={fields} expandOn='Click' /> */}
                {/* <ul style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px"}} className='mt-10'>
                                    <li style={{fontSize:"20px"}}>Home</li>
                                    <li style={{fontSize:"20px"}}>Project</li>
                                    <li style={{fontSize:"20px"}}>Feasibility</li>
                                    <li style={{fontSize:"20px"}}>About</li>
                                    
                                </ul>  */}
                <div
                  className="absolute flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full cursor-pointer "
                  style={{ marginBottom: "10px" }}
                  onClick={toggleClick}
                >
                  <BiChevronLeft
                    className={`${
                      onClose ? "rotate-180" : " "
                    } text-3xl transition-all duration-300 `}
                  />
                </div>
                <br />

                <SidebarData />
              </div>
            </div>
          </SidebarComponent>
          <div
            className="main-content"
            style={{ height: "100vh" }}
            id="main-text"
          >
            <div className="sidebar-content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutUser;
