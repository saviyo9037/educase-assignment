import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Register() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    agency: Yup.string().required("Please select an option"),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-[375px] h-[812px] bg-white rounded-2xl shadow-xl px-6 py-8 flex flex-col justify-between">

        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Create your <br /> PopX account
          </h1>

          <Formik
            initialValues={{
              fullName: "",
              phone: "",
              email: "",
              password: "",
              company: "",
              agency: "Yes",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              navigate("/account", { state: values });
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4">

             
                <div>
                  <label className="text-purple-600 text-sm font-medium">
                    Full Name*
                  </label>
                  <Field
                    name="fullName"
                    className="w-full mt-1 px-4 py-3 border rounded-lg text-sm border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <div>
                  <label className="text-purple-600 text-sm font-medium">
                    Phone number*
                  </label>
                  <Field
                    name="phone"
                    className="w-full mt-1 px-4 py-3 border rounded-lg text-sm border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-purple-600 text-sm font-medium">
                    Email address*
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full mt-1 px-4 py-3 border rounded-lg text-sm border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>

        
                <div>
                  <label className="text-purple-600 text-sm font-medium">
                    Password*
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="w-full mt-1 px-4 py-3 border rounded-lg text-sm border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>

     
                <div>
                  <label className="text-purple-600 text-sm font-medium">
                    Company name
                  </label>
                  <Field
                    name="company"
                    className="w-full mt-1 px-4 py-3 border rounded-lg text-sm border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>

           
                <div>
                  <label className="text-gray-700 text-sm font-medium">
                    Are you an Agency?*
                  </label>
                  <div className="flex items-center gap-6 mt-2">
                    <label className="flex items-center gap-2">
                      <Field type="radio" name="agency" value="Yes" className="accent-purple-600" />
                      Yes
                    </label>

                    <label className="flex items-center gap-2">
                      <Field type="radio" name="agency" value="No" className="accent-purple-600" />
                      No
                    </label>
                  </div>
                </div>

      
                <button
                  type="submit"
                  className="w-full mt-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-purple-500 hover:opacity-90 transition"
                >
                  Create Account
                </button>

              </Form>
            )}
          </Formik>
        </div>

      </div>
    </div>
  );
}

export default Register;
