import React from "react";

function UserInfo() {
  console.log("UserInfo component rendered");
  return (
    <div className="fixed inset-0 flex items-center justify-center border-2 border-black">
      <div className="p-6 rounded-xl bg-white shadow-xl">
        <h1 className="text-2xl font-bold text-black">User Info</h1>
      </div>
    </div>
  );
}

export default UserInfo;
