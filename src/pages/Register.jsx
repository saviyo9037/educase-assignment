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
    <div className="min-h-[100dvh] flex items-center bg-white justify-center ">
      <div className="w-[375px] h-[812px]    flex bg-gray-100 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto px-6 pt-8">
          <h1 className="text-[30px] font-bold text-gray-900 leading-10 mb-10">
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
            {() => (
              <Form className="space-y-5">
                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[14px] font-[500] text-purple-600">
                    Full Name*
                  </label>
                  <Field
                    name="fullName"
                    className="w-full mt-1 px-4 py-3 border rounded-lg text-sm border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[14px] font-[500] text-purple-600">
                    Phone number*
                  </label>
                  <Field
                    name="phone"
                    className="w-full mt-1 px-4 py-3 border rounded-lg text-sm border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[14px] font-[500] text-purple-600">
                    Email address*
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full mt-1 px-4 py-3 border rounded-lg text-sm border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[14px] font-[500] text-purple-600">
                    Password*
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="w-full mt-1 px-4 py-3 border rounded-lg text-sm border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[14px] font-[500] text-purple-600">
                    Company name
                  </label>
                  <Field
                    name="company"
                    className="w-full mt-1 px-4 py-3 border rounded-lg text-sm border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <label className="text-[14px] font-[500] text-gray-700">
                    Are you an Agency?*
                  </label>
                  <div className="flex items-center gap-6 mt-3">
                    <label className="flex items-center gap-2 text-sm">
                      <Field
                        type="radio"
                        name="agency"
                        value="Yes"
                        className="accent-purple-600"
                      />
                      Yes
                    </label>

                    <label className="flex items-center gap-2 text-sm">
                      <Field
                        type="radio"
                        name="agency"
                        value="No"
                        className="accent-purple-600"
                      />
                      No
                    </label>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="px-6 pb-6 pt-3">
          <button
            onClick={() => navigate("/account")}
            className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r bg-[#9249e7]"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
