import { useLocation } from "react-router-dom";
import profileImg from "../assets/profile.png";

const AccountSettings = () => {
  const location = useLocation();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const user = location.state || storedUser;

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>No user data found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[375px] h-[812px] bg-gray-100  overflow-hidden">
        <div className=" px-6 py-4 bg-white">
          <h2 className="text-xl font-semibold  text-gray-600">
            Account Settings
          </h2>
        </div>

        <div className="px-6 bg-gray-100 py-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={profileImg}
                alt="Profile"
                className="w-[70px] h-[70px] rounded-full object-cover"
              />

              <div className="absolute bottom-0 right-0 bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                📷
              </div>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-gray-800">
                {user.fullName}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{user.email}</p>
            </div>
          </div>

          <p className="text-[14px] font-semibold   text-gray-600 mt-6 leading-5">
            Lorem Ipsum Dolor Sit Amet,Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>

          <div className="border-t border-dashed border-gray-300 mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
