import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex w-full min-h-screen ">
      <div style={{backgroundImage: "url('https://media.istockphoto.com/id/1332438652/photo/autumn-sale-background-with-maple-leaves-shopping-bag-gift-box-percent-symbol-acorn-copy.jpg?s=612x612&w=0&k=20&c=TLq7WcmxmZRb9D3sCPKVKywatihFBLHWxzF_jl7_KHw=')"}} className="hidden lg:flex items-center justify-center w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-5xl italic text-blue-950 font-extrabold tracking-tight">
            Welcome to shop4You
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
