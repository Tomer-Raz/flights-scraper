// import React, { useContext } from "react";
// import { Formik } from "formik";
// import { Button } from "antd";
// import { Input } from "formik-antd";
// import MultiStepFormContext from "./MultiStepFormContext";
// const Address = () => {
//   const { address, setAddress, next, prev } = useContext(MultiStepFormContext) as any;
//   return (
//     <Formik
//       initialValues={address}
//       onSubmit={(values) => {
//         setAddress(values);
//         next();
//       }}
//       validate={(values) => {
//         const errors: any = {};
//         if (!values.address1) errors.address1 = "Address is required";
//         if (!values.city) errors.city = "City is required";
//         return errors;
//       }}
//     >
//       {({ handleSubmit, errors }: any) => {
//         return (
//           <div>
//             <div className={`form__item ${errors.address1 && "input__error"}`}>
//               <label>Address-1 *</label>
//               <Input name={"address1"} />
//               <p>{errors.address1}</p>
//             </div>
//             <div >
//               <label>Address-2</label>
//               <Input name={"address2"} />
//             </div>
//             <div>
//               <label>City *</label>
//               <Input name={"city"} />
//               <p>{errors.city}</p>
//             </div>
//             <div
//               className={
//                 "form__item button__items d-flex justify-content-between"
//               }
//             >
//               <Button type={"default"} onClick={prev}>
//                 Back
//               </Button>
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
// export default Address;
