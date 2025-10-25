import { FaDownload } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { getApp } from "../utility/Utility";
import { ToastContainer, toast } from "react-toastify";
const InstaledApp = ({ iData, setunstall }) => {
  const unstallHandle = (id) => {
    const localSData = getApp();
    const filDAta = localSData.filter((d) => d !== id);
    const data = JSON.stringify(filDAta);
    localStorage.setItem("appData", data);
    setunstall([...filDAta]);
    toast("App unstaling");
  };
  return (
    <div className="h-28 flex relative  items-center shadow-2xl gap-3 px-7 mb-6">
      <div className="   w-36">
        <img className=" rounded-xl object-cover" src={iData.image} alt="" />
      </div>
      <div>
        <h4 className="font-medium text-xl text-[#001931]">{iData.title}</h4>
        <small className="flex items-center gap-3">
          <span className="text-[#00D390] flex items-center gap-1">
            <FaDownload></FaDownload>
            {iData.downloads}
          </span>

          <span className="text-[#FF8811] flex items-center gap-1">
            <IoStar></IoStar>
            {iData.ratingAvg}
            {iData.downloads}
          </span>
          <span className="text-[#627382] flex items-center gap-1">
            {iData.size} mb
          </span>
        </small>
      </div>
      <div className="absolute right-3.5 ">
        <button
          onClick={() => unstallHandle(iData.id)}
          className="btn btn-primary"
        >
          unstall
        </button>
      </div>
    </div>
  );
};

export default InstaledApp;
