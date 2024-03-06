import React from "react";
import "../AdminDash.css";
import UpcomingBirthdays from "../../../Pages/AddEmployee/UpcomingBirthdays";
import TaskChart from "../Dashboard/Chart/TaskChart";
import DepartmentChart from "../../../Pages/Chart/DepartmentChart";
import HolidayList from "../../../Pages/LeaveCalendar/HolidayList";
import EmployeeCount from "./CountData/EmployeeCount";
import LeaveCount from "./CountData/LeavesCount";

const AdminDash = () => {
  return (
    <div className="main-container">
      <h2 className="text-muted fw-bolder mb-4">🪟 ADMIN DASHBOARD</h2>
      <div className="row gap-0 mx-0">
        <div className="col-lg-9">
          <EmployeeCount />
          <LeaveCount />
          <div className="row row_flex mt-5">
            <div className="col-lg-6">
              <TaskChart />
            </div>
            <div className="col-lg-6">
              <DepartmentChart />
            </div>
          </div>
          <div className="row row_flex">
            <div className="col-lg-12">{/* <TodatAttendance /> */}</div>
          </div>
        </div>
        <div className="col-lg-3 ">
          <UpcomingBirthdays />
          <div className=" mt-3">
            <HolidayList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
