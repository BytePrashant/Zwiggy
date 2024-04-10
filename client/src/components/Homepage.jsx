import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const seekerPage = () => {
    navigate("/Seeker");
  };

  const referralPage = () => {
    navigate("/referral");
  };

  const signupPage = () => {
    navigate("/signup");
  };

  return (
    <div className="container bg-gray-100 p-28">
      <div className="content-box flex justify-between">
        <div className="title-box">
          <h1 className="font-semibold text-start text-6xl">If you haven't</h1>
          <h1 className="font-semibold text-start text-6xl leading-snug">
            found it yet,
          </h1>
          <h1 className="font-bold text-start text-6xl">keep looking.</h1>
          <h6 className="font-semibold text-lg mt-8">
            Give referrals to folks who deserve it.
          </h6>
          <div className="flex gap-4 mt-8">
            <button
              className="font-bold border-2 p-2 w-1/2 bg-black text-white"
              onClick={signupPage}
            >
              Have a referral ?
            </button>
            <button className="font-bold border-2 p-2 w-1/2">
              Start your page
            </button>
          </div>
        </div>
        <div className="image-box">
          <img src="./image.png" alt="" className="h-72" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
