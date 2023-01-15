import React, { useEffect } from "react";

import { useFormik } from "formik";
import { signUpSchema } from "./schemas/index";

const Task3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formik = useFormik({
    initialValues: {
      firstNumber: "",
      lastNumber: "",
      multiplication: "",
      total: " ",
    },
    validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      resetForm({ values: "" });
    },
  });

  return (
    <div>
      <div className="flex w-full mt-12 max-w-sm mx-auto overflow-hidden dark:bg-gray-800 lg:max-w-3xl m-3">
        <div className="">
          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-3 gap-2 w-full p-2 ml-auto mr-auto bg-white rounded-lg shadow-2xl "
          >
            <div className="mt-4 text-left">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="LoggingEmailAddress"
              >
                Addition +
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                name="firstNumber"
                onChange={formik.handleChange}
                value={formik.values.firstNumber}
                // value={data.firstName}
                required
                placeholder="Fast number"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="loggingPassword"
                >
                  Subtraction -
                </label>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                name="lastNumber"
                onChange={formik.handleChange}
                value={formik.values.lastNumber}
                // value={data.password}
                required
                placeholder="last Number"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="loggingPassword"
                >
                  Multiplication
                </label>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                name="multiplication"
                onChange={formik.handleChange}
                value={formik.values.multiplication}
                // value={data.password}
                required
                placeholder="last Number"
              />
            </div>

            <div className="mt-4 ml-auto mr-auto">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="loggingPassword"
                >
                  Total
                </label>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                name="total"
                onChange={formik.handleChange}
               
                value={(formik.values.firstNumber - formik.values.lastNumber) * formik.values.multiplication}
                // value={data.password}
                required
                placeholder="Total"
              />
            </div>

            {/* <div className="mt-8">
              <button
                type="submit"
                className=" px-14 rounded-full py-2 tracking-wide text-white transition-colors duration-300 transform   focus:outline-none focus:bg-gray-600 bg-blue-500 hover:bg-sky-600 font-bold"
              >
                Sign Up
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Task3;
