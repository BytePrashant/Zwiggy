import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="container flex justify-center items-center p-28">
      <div className="content-box flex iterm-center justify-between p-10 box-content border-4 rounded-3xl shadow-lg w-1/2 h-96 transform transition-transform hover:scale-105">
      <Link to="/seeker">
        <div className="box-content flex flex-col py-20 border-8 rounded-full w-1/3 transform transition-transform hover:scale-95">
          <img src="seeker.webp" alt="" className="w-1/3 mx-auto" />
          <p className="font-bold text-center mt-10">Job seeker?</p>
        </div>
        </Link>
        <Link>
        <div  className="box-content flex flex-col py-20 border-8 rounded-full w-1/3 transform transition-transform hover:scale-95">
          <img src="referral.png" alt="" className="w-1/3 mx-auto" />
          <p className="font-bold mt-10 text-center">Have an opening in your team?</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
