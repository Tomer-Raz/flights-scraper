// import React, { useContext } from "react";
// import { Formik } from "formik";
// import { Button } from "antd";
// import { Input, InputNumber } from "formik-antd";
// import MultiStepFormContext from "./MultiStepFormContext";
// const Details = () => {
//   const { details, setDetails, next } = useContext(MultiStepFormContext) as any;
//   return (
//     <Formik
//       initialValues={details}
//       onSubmit={(values) => {
//         setDetails(values);
//         next();
//       }}
//       validate={(values) => {
//         const errors: any = {};
//         if (!values.name) errors.name = "Name is required";
//         if (!values.age) errors.age = "Age is required";
//         if (values.age > 90) errors.age = "Are you sure you're human?";
//         if (!values.profession) errors.profession = "Profession is required";
//         if (/^[0-9]+$/.test(values.profession))
//           errors.profession =
//             "Profession does not require numbers or special characters";
//         return errors;
//       }}
//     >
//       {({ handleSubmit, errors }: any) => {
//         return (
//           <div>
//             <div>
//               <label>Name *</label>
//               <Input name={"name"} />
//               <p>{errors.name}</p>
//             </div>
//             <div>
//               <label>Age *</label>
//               <InputNumber name={"age"} min={0} />
//               <p className={"error__feedback"}>{errors.age}</p>
//             </div>
//             <div>
//               <label>Profession *</label>
//               <Input name={"profession"} />
//               <p className={"error__feedback"}>{errors.profession}</p>
//             </div>
//             <div>
//               <Button type={"primary"} onClick={handleSubmit}>
//                 Next
//               </Button>
//             </div>
//           </div>
//         );
//       }}
//     </Formik>
//   );
// };
// export default Details;
