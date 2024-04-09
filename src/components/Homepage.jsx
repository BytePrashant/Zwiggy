import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const seekerPage = () => {
    navigate("/Seeker");
  };

  const referralPage = () => {
    navigate("/referral");
  };

  return (
    <div className="container flex justify-center items-center p-28">
      <div className="content-box">
        <h1>start helping your community today</h1>
        <h6>Give referrals to folks who have skills</h6>
        
      </div>
    </div>
  );
};

export default Homepage;
