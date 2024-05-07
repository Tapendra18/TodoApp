import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex h-35 justify-between p-3">
        <div>
          <h6 className="text-sm text-gray-600 ">Todo App</h6>
        </div>
        <div className="flex items-center gap-2	">
          <h6 className="text-slate-500 text-sm">Don't have an account?</h6>
          <button className="bg-[#7b68ee] p-2 rounded-md text-white">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Login;
