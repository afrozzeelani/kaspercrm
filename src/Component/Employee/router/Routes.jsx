import React from "react";
import { Route } from "react-router-dom";
import PersonalInfo from "../PersonalInfo.jsx";
import Education from "../Education.jsx";
import FamilyInfo from "../FamilyInfo.jsx";
import WorkExperience from "../WorkExperience.jsx";
import LeaveApplicationEmp from "../LeaveApplicationEmp.jsx";
// import NotFound404 from "../../Pages/PageNot/NotFound404.jsx";
import EmployeeNewTask from "../EmployeeTaskManagement/EmployeeNewTask.jsx";
import EmployeeActiveTask from "../EmployeeTaskManagement/EmployeeActiveTask.jsx";
import EmployeeCompleteTask from "../EmployeeTaskManagement/EmployeeCompleteTask.jsx";
import EmployeeRejectTask from "../EmployeeTaskManagement/EmployeeRejectTask.jsx";
import Attendance from "../attendance/Attendance.jsx";
import AttendanceList from "../attendance/AttendanceList.jsx";
import EmpDash from "../Dashboard/EmpDash.jsx";
import LeaveApplicationEmpTable from "../LeaveApplicationEmpTable.jsx";
import DepartmentChart from "../../../Pages/Chart/DepartmentChart";
import DashContainer from "../../DashContainer.jsx";

const RouterContent = ({ data }) => {
  return (
    // <DashContainer>
    <div
      style={{ height: "100%", width: "100%", overflow: "auto" }}
      className="empSidebar d-flex flex-column"
    >
      <Route path="/employee/dashboard" exact component={EmpDash} />
      <Route
        exact
        path="/employee/:id/personal-info"
        render={(props) => <PersonalInfo data={data} back={false} />}
      />
      <Route
        exact
        path="/employee/:id/education"
        render={(props) => <Education data={data} back={false} />}
      />
      <Route
        exact
        path="/employee/:id/family-info"
        render={(props) => <FamilyInfo data={data} back={false} />}
      />
      <Route
        exact
        path="/employee/:id/work-experience"
        render={(props) => <WorkExperience data={data} back={false} />}
      />
      <Route
        exact
        path="/employee/:id/leave-application-emp"
        render={(props) => <LeaveApplicationEmp data={data} />}
      />
      <Route
        exact
        path="/employee/:id/leave-emp"
        render={(props) => <LeaveApplicationEmpTable data={data} />}
      />
      <Route
        exact
        path="/employee/:id/leave-application-emp"
        render={(props) => <LeaveApplicationEmp data={data} />}
      />
      <Route
        exact
        path="/employee/:id/attenDance"
        render={(props) => <Attendance data={data} />}
      />
      <Route
        exact
        path="/employee/:id/attendanceList"
        render={(props) => <AttendanceList data={data} />}
      />
      <Route
        exact
        path="/employee/:id/departmentchart"
        render={(props) => <DepartmentChart data={data} />}
      />
      <Route path="/employee/newTask" exact component={EmployeeNewTask} />
      <Route path="/employee/activeTask" exact component={EmployeeActiveTask} />
      <Route
        path="/employee/taskcomplete"
        exact
        component={EmployeeCompleteTask}
      />
      <Route path="/employee/taskreject" exact component={EmployeeRejectTask} />
    </div>
    // </DashContainer>
  );
};

export default RouterContent;
