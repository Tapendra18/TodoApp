import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <>
      <div>
        <div className="flex h-35 justify-between p-3 bg-[#fafbfc]">
          <div className="flex items-center">
            <h6 className="text-sm text-gray-600 cursor-pointer">Gravity</h6>
          </div>
          <div className="flex items-center gap-2	">
            <h6 className="text-slate-500 text-sm">
              Already account click here?
            </h6>
            <Link href="/">
              <button className="bg-[#7b68ee] p-2 rounded-md text-white hover:bg-[#5f48ea]">
                login
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: " flex",
            justifyContent: "center",
            height: "calc(100vh - 65px)",
          }}
        >
          <div className="signup-box-style">
            <h6 className="text-xl font-semibold text-center">
              Seconds to sign up!
            </h6>
            <div className="flex gap-2 flex-col">
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  Full Name
                </label>
                <input
                  className="border-slate-800 rounded-sm"
                  style={{
                    border: "1px solid #d6d9de",
                    borderRadius: "9px",
                    padding: "0 20px 0 36px",
                    height: "40px",
                    color: "#2a2e34",
                    outline: "none",
                  }}
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  Work Email
                </label>
                <input
                  className="border-slate-800 rounded-sm"
                  style={{
                    border: "1px solid #d6d9de",
                    borderRadius: "9px",
                    padding: "0 20px 0 36px",
                    height: "40px",
                    color: "#2a2e34",
                    outline: "none",
                  }}
                  type="text"
                  placeholder="Enter your work email"
                />
              </div>
              <div className="flex gap-2 flex-col ">
                <label className="text-xs" htmlFor="">
                  password
                </label>
                <input
                  style={{
                    border: "1px solid #d6d9de",
                    borderRadius: "9px",
                    padding: "0 20px 0 36px",
                    height: "40px",
                    color: "#2a2e34",
                    outline: "none",
                  }}
                  className="border-slate-800 rounded-sm"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <button className="bg-[#7b68ee] p-2 rounded-md text-white w-full hover:bg-[#5f48ea]">
              Sign Up
            </button>
            <h6
              className="text-xs text-[#7b68ee] cursor-pointer"
              style={{
                margin: "auto",
              }}
            >
              or SignUp with google
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
