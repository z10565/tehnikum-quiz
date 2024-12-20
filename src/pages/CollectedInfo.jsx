// import React from "react";
// const CollectedInfo = () => {
//   const name = JSON.parse(localStorage.getItem("userInfo"));
//   const phone = JSON.parse(localStorage.getItem("userPhone"));
//   const origin = JSON.parse(localStorage.getItem("userOrigin"));
//   const course =
//     JSON.parse(localStorage.getItem("checkedCourse"));
//   const teacher =
//     JSON.parse(localStorage.getItem("emotionsCourse"));
//   const satisfaction = JSON.parse(localStorage.getItem("satisfaction"));
//   return (
//     <div
//       className="container"
//       style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
//     >
//       <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           margin: "20px 0",
//           fontSize: "18px",
//           textAlign: "left",
//         }}
//       >
//         <thead>
//           <tr style={{ backgroundColor: "#f2f2f2" }}>
//             <th style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               Ваше имя
//             </th>
//             <th style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               Ваш номер
//             </th>
//             <th style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               Вы узнали о нас c/от
//             </th>
//             <th style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               Вы обучаетесь на _ курсе
//             </th>
//             <th style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               Вы описываете своего учителя
//             </th>
//             <th style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               Вы оцениваете учебу у нас на _ баллов
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               {name}
//             </td>
//             <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               {phone}
//             </td>
//             <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               {origin}
//             </td>
//             <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               {course}
//             </td>
//             <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               {teacher}
//             </td>
//             <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
//               {satisfaction}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CollectedInfo;

import React from "react";
const CollectedInfo = () => {
  const name = JSON.parse(localStorage.getItem("userInfo"));
  const phone = JSON.parse(localStorage.getItem("userPhone"));
  const origin = JSON.parse(localStorage.getItem("userOrigin"));
  const course = JSON.parse(localStorage.getItem("checkedCourse"));
  const teacher = JSON.parse(localStorage.getItem("emotionsCourse"));
  const satisfaction = JSON.parse(localStorage.getItem("satisfaction"));
  const clearStorage = () => {
    localStorage.clear();
  };

  return (
    <div
      className="container"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <div style={{ fontSize: "18px" }}>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ fontWeight: 700 }}>Ваше имя:</div> {name}.
        </div>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ fontWeight: 700 }}>Ваш номер:</div> {phone}.
        </div>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ fontWeight: 700 }}>Вы узнали о нас с/от:</div> {origin}.
        </div>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ fontWeight: 700 }}>
            Вы обучаетесь на {course} курсе.
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ fontWeight: 700 }}>Вы описываете своего учителя:</div>
          {teacher}.
        </div>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ fontWeight: 700 }}>
            Вы оцениваете учебу у нас на {satisfaction} баллов.
          </div>
        </div>
        <button onClick={clearStorage}>Clear</button>
      </div>
    </div>
  );
};

export default CollectedInfo;
