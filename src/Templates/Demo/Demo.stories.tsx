// import React from "react";
// import { Card, TextStyles } from "../../components";
// import { Demo } from "./Demo";

// export default {
//   title: "Templates/Demo",
//   component: Demo,
//   parameters: {
//     docs: {},
//   },
// };

// const Template = ({}) => {
//   return (
//     <Card>
 

//       {Object.keys(Demo)?.map((detail: any, index: number) => {
//         return (
//           <div key={index}>
//             <div className="accordion-wrapper">{detail}</div>
//             {Demo[detail]?.map((children: any, i: any) => (
//               <>
//               {console.log(Demo[detail].children)}
//                 <div key={i}>
//                   <h3>{children.Name} </h3>
//                   <h3>{children.Address}</h3>
//                   <h3>{children.Age}</h3>
//                   <h3>{children.ChildrenCount}</h3>
//                   <hr />
//                 </div>
//                 <div>
//                   {/* {Demo[detail][children].map((grandChildren: any, i: any) => (
//                     <>
//                     <h3>{grandChildren.Name}</h3>
//                     </>
//                   ))} */}
//                 </div>
//               </>
//             ))}
//           </div>
//         );
//       })}
//     </Card>
//   );
// };
// export const Primary: any = Template.bind({});
