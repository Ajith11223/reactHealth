import {
  SidebarComponent,
  TreeViewComponent,
} from "@syncfusion/ej2-react-navigations";
import React from "react";
import SidebarData from "../SideBar/SideBarData";
import { BiChevronLeft } from "react-icons/bi";

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
                src={
                  "http://localhost:3001/static/media/NavIcon.e65bef8dc512ce9936bf.png"
                }
                alt="Icon"
                width={210}
                height={36.13}
                className=""
              />
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold">name</span>
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmR1VLcPa0aFfNClulnJQOD2GR9Nxw-3AEFvSg9ss&s"
                  }
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-xl cursor-pointer text-black">
                  <b> &#8744; </b>
                </span>
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
                  style={{marginBottom:"10px"}}
                  onClick={toggleClick}
                >
                  <BiChevronLeft
                    className={`${
                      onClose ? "rotate-180" : " "
                    } text-3xl transition-all duration-300 `}
                  />
                </div>
                <br />

                <SidebarData/>
              </div>
            </div>
          </SidebarComponent>
          <div
            className="main-content"
            style={{ height: "100vh" }}
            id="main-text"
          >
            <div className="sidebar-content" >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutUser;
