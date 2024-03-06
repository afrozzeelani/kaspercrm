import axios from "axios";
import React, { useState, useEffect } from "react";
import { GiPartyPopper } from "react-icons/gi";

const UpcomingBirthdays = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isIdFilterActive, setIsIdFilterActive] = useState(false);
  const [isIdSortAscending, setIsIdSortAscending] = useState(true);
  const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);

  const loadEmployeeData = () => {
    axios
      .get("http://localhost:4000/api/employee", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then((response) => {
        // Ensure that response.data is an array
        if (Array.isArray(response.data)) {
          setEmployeeData(response.data);
          setLoading(false);

          // Clear the state arrays
          setRowData([]);

          response.data.forEach((data) => {
            let temp = {
              data,
              Email: data["Email"],
              Password: data["Password"],
              Account:
                data["Account"] === 1
                  ? "Admin"
                  : data["Account"] === 2
                  ? "HR"
                  : data["Account"] === 3
                  ? "Employee"
                  : "",
              RoleName: data["role"][0] ? data["role"][0]["RoleName"] : "",
              FirstName: data["FirstName"],
              MiddleName: data["MiddleName"],
              LastName: data["LastName"],
              DOB: data["DOB"].slice(0, 10),
              ContactNo: data["ContactNo"],
              EmployeeCode: data["EmployeeCode"],
              empID: data["empID"],
              DepartmentName: data["department"][0]
                ? data["department"][0]["DepartmentName"]
                : "",
              PositionName: data["position"][0]
                ? data["position"][0]["PositionName"]
                : "",
              DateOfJoining: data["DateOfJoining"].slice(0, 10)
            };

            // Use set function to update state
            setRowData((prevData) => [...prevData, temp]);
          });
        } else {
          console.error("Data received is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadEmployeeData();
  }, []);

  const calculateUpcomingBirthdays = () => {
    const today = new Date();
    const upcomingBirthdaysData = rowData.filter((employee) => {
      const dob = new Date(employee.DOB);
      dob.setFullYear(today.getFullYear());

      // Check if the upcoming birthday is within the next 7 days
      const timeDiff = dob - today;
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return daysDiff >= 0 && daysDiff <= 7;
    });

    setUpcomingBirthdays(upcomingBirthdaysData);
  };

  useEffect(() => {
    calculateUpcomingBirthdays();
  }, [rowData]);

  return (
    <div className="container">
      <div className="birthday shadow position-relative">
        <h5
          style={{
            position: "sticky",
            top: "0",
            backgroundColor: "var(--primaryDashColorDark)",
            color: "var(--primaryDashMenuColor)"
          }}
          className="fw-bolder pb-3 px-3 pt-3 d-flex justify-content-between gap-0 text-center"
        >
          <GiPartyPopper /> Upcoming Birthdays{" "}
          <span className="text-primary">({upcomingBirthdays.length})</span>
        </h5>
        <div>
          {upcomingBirthdays.length > 0 ? (
            <div className="d-flex flex-column gap-3 py-3 px-3">
              {upcomingBirthdays.map((employee) => (
                <div
                  style={{ borderBottom: "1px solid #E3F4F4" }}
                  className=""
                  key={employee.empID}
                >
                  <div className="row" style={{ verticalAlign: "middle" }}>
                    <div className="d-flex justify-content-between ">
                      <div className="d-flex gap-2">
                        <div style={{ height: "45px", width: "45px" }}>
                          <img
                            style={{
                              height: "100%",
                              width: "100%",
                              border: "3px solid gray",
                              borderRadius: "50%",
                              overflow: "hidden",
                              objectFit: "cover"
                            }}
                            src={
                              employee?.data?.profile?.image_url
                                ? employee?.data?.profile?.image_url
                                : "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
                            }
                            alt=""
                          />
                        </div>
                        <div className="d-flex flex-column my-auto">
                          <span
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            {employee.empID}
                          </span>
                          <span
                            style={{ fontSize: "13px", fontWeight: "bold" }}
                            className="text-uppercase fw-bold"
                          >{`${employee.FirstName} ${employee.LastName}`}</span>
                        </div>
                      </div>
                      <div
                        style={{ fontSize: "13px" }}
                        className="my-auto fw-bolder text-muted"
                      >
                        Date <br />
                        {employee.DOB}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No upcoming birthdays in the next 7 days.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingBirthdays;

// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const UpcomingBirthdays = () => {
//   const [employeeData, setEmployeeData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [rowData, setRowData] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [isIdFilterActive, setIsIdFilterActive] = useState(false);
//   const [isIdSortAscending, setIsIdSortAscending] = useState(true);
//   const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);

//   const loadEmployeeData = () => {
//     axios
//       .get("http://localhost:4000/api/employee", {
//         headers: {
//           authorization: localStorage.getItem("token") || ""
//         }
//       })
//       .then((response) => {
//         // Ensure that response.data is an array
//         if (Array.isArray(response.data)) {
//           setEmployeeData(response.data);
//           setLoading(false);

//           // Clear the state arrays
//           setRowData([]);

//           response.data.forEach((data) => {
//             let temp = {
//               data,
//               Email: data["Email"],
//               Password: data["Password"],
//               Account:
//                 data["Account"] === 1
//                   ? "Admin"
//                   : data["Account"] === 2
//                   ? "HR"
//                   : data["Account"] === 3
//                   ? "Employee"
//                   : "",
//               RoleName: data["role"][0] ? data["role"][0]["RoleName"] : "",
//               FirstName: data["FirstName"],
//               MiddleName: data["MiddleName"],
//               LastName: data["LastName"],
//               DOB: data["DOB"].slice(0, 10),
//               ContactNo: data["ContactNo"],
//               EmployeeCode: data["EmployeeCode"],
//               empID: data["empID"],
//               DepartmentName: data["department"][0]
//                 ? data["department"][0]["DepartmentName"]
//                 : "",
//               PositionName: data["position"][0]
//                 ? data["position"][0]["PositionName"]
//                 : "",
//               DateOfJoining: data["DateOfJoining"].slice(0, 10)
//             };

//             // Use set function to update state
//             setRowData((prevData) => [...prevData, temp]);
//           });
//         } else {
//           console.error("Data received is not an array:", response.data);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     loadEmployeeData();
//   }, []);

//   const calculateUpcomingBirthdays = () => {
//     const today = new Date();
//     const upcomingBirthdaysData = rowData.filter((employee) => {
//       const dob = new Date(employee.DOB);
//       dob.setFullYear(today.getFullYear());

//       // Check if the upcoming birthday is within the next 7 days
//       const timeDiff = dob - today;
//       const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
//       return daysDiff >= 0 && daysDiff <= 7;
//     });

//     setUpcomingBirthdays(upcomingBirthdaysData);
//   };

//   useEffect(() => {
//     calculateUpcomingBirthdays();
//   }, [rowData]);

//   return (
//     // <div className="col-12 col-md-6 col-lg-4 p-4 Upbirth">
//     // <div className="Upbirth">
//     <div className="container box-shadow: 0 4px 10px 0 rgb(137 137 137 / 25%); ">
//       <div className="birthday">
//         <h4 className="fw-bolder d-flex text-muted gap-0 text-center">
//           Upcoming Birthdays{" "}
//           <span className="text-primary mx-2">
//             ({upcomingBirthdays.length})
//           </span>
//         </h4>
//         <div
//           className="mainbirth"
//           style={{ maxWidth: "100%", overflowX: "auto" }}
//         >
//           {upcomingBirthdays.length > 0 ? (
//             <table className="table table-striped mt-3">
//               <thead>
//                 <tr>
//                   <th>Employee ID</th>
//                   <th>Name</th>
//                   <th>Date of Birth</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {upcomingBirthdays.map((employee) => (
//                   <tr key={employee.empID}>
//                     <td>{employee.empID}</td>
//                     <td>{`${employee.FirstName} ${employee.LastName}`}</td>
//                     <td>{employee.DOB}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No upcoming birthdays in the next 7 days.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpcomingBirthdays;
