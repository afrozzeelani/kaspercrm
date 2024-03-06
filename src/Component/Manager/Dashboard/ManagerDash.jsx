// import React from "react";
// import DashContent from "./DashContent";
// import UpcomingBirthdays from "../../../Pages/AddEmployee/UpcomingBirthdays";
// import HrCharts from "../Chart/TaskChart";
// import DepartmentChart from "../Chart/DepartmentChart";
// import HolidayList from "../../../Pages/LeaveCalendar/HolidayList";
// import TodatAttendance from "../attendance/TodaysAttendance";

// const HRDash = () => {
//   return (
//     // <div className="conatiner">
//     //   <div className="row">
//     //     <div className="col-md-9">
//     //       <DashContent />
//     //     </div>

//     //     <div className="col-md-3 m-0 pt-5">
//     //       <UpcomingBirthdays />
//     //       <HrCharts />
//     //       <UpcomingBirthdays />
//     //     </div>
//     //   </div>
//     //   <div className="row">
//     //     <div className="col-md-4">
//     //       <HrCharts />
//     //     </div>
//     //     <div className="col-md-5">
//     //       <UpcomingBirthdays />
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="main-container">
//       <h2 className="text-muted fw-bolder mb-4">🪟 HRD DASHBOARD</h2>
//       <div className="row gap-0 mx-0">
//         <div className="col-lg-9">
//           <DashContent />
//           <div className="row row_flex">
//             <div className="col-lg-6">
//               <HrCharts />
//             </div>
//             <div className="col-lg-6">
//               <DepartmentChart />
//             </div>
//           </div>
//           <div className="row row_flex">
//             {/* <div className="col-lg-12">
//               <TodatAttendance />
//             </div> */}
//           </div>
//         </div>
//         <div className="col-lg-3 ">
//           <UpcomingBirthdays />
//           <div className="holiday mt-3">
//             <HolidayList />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HRDash;

import React from "react";
import TaskChart from "./Chart/TaskChart";
import LeaveCount from "./CountData/LeavesCount";
import EmplolyeeCount from "./CountData/EmployeeCount";
import InnerDashContainer from "../../InnerDashContainer";
import UpcomingBirthdays from "../../../Pages/AddEmployee/UpcomingBirthdays";
import DepartmentChart from "./Chart/DepartmentChart";
import HolidayList from "../../../Pages/LeaveCalendar/HolidayList";
import TodatAttendance from "../attendance/TodaysAttendance";

const ManagerDash = () => {
  return (
    <InnerDashContainer>
      <div className="row gap-0 mx-0">
        <div className="col-lg-9">
          <EmplolyeeCount />
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
        <div className="col-lg-3">
          <UpcomingBirthdays />
          {/* <div className="holiday mt-3">
            <HolidayList />
          </div> */}
          <div className="col-md-9"></div>
        </div>
      </div>
    </InnerDashContainer>
  );
};

export default ManagerDash;
