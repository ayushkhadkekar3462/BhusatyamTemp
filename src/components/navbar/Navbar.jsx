// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Navbar.scss";
// import Web3 from "web3";

// function Navbar() {
//   const [active, setActive] = useState(false);
//   const [open, setOpen] = useState(false);

//   const { pathname } = useLocation();

//   const isActive = () => {
//     window.scrollY > 0 ? setActive(true) : setActive(false);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", isActive);
//     return () => {
//       window.removeEventListener("scroll", isActive);
//     };
//   }, []);

//   // const currentUser = null

//   const currentUser = {
//     id: 1,
//     username: "XYZ",
//     isSeller: true,
//   };

//   const [accounts, setAccounts] = useState(null);
//   const connectWallet = async () => {
//     if (window.ethereum.isMetaMask) {
//       const web3Instance = new Web3(window.ethereum);
//       const accounts = await web3Instance.eth.requestAccounts();
//       setAccounts(accounts);
//     }
//   };

//   return (
//     <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
//       <div className="container">
//         <div className="logo">
//           <Link className="link" to="/">
//             <span className="text">FreelanceNest</span>
//           </Link>
//           <span className="dot">.</span>
//         </div>
//         <div className="links">
//           <span>Business</span>
//           <span>Explore</span>
//           <div className="walletsec">
//             {accounts && accounts.length > 0 && (
//               <div className="connected">
//                 <p> Account Details</p>
//                 <p>Address: {accounts[0]}</p>
//               </div>
//             )}
//             {!accounts && (
//               <button onClick={connectWallet}>Connect Wallet</button>
//             )}
//           </div>

//           {!currentUser?.isSeller && <span>Become a Seller</span>}
//           {currentUser ? (
//             <div className="user" onClick={() => setOpen(!open)}>
//               <img
//                 src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <span>{currentUser?.username}</span>
//               {open && (
//                 <div className="options">
//                   {currentUser.isSeller && (
//                     <>
                       
//                     </>
//                   )}
                  
//                   <Link className="link" to="/">
//                     Logout
//                   </Link>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <>
//               <span>Sign in</span>
//               <Link className="link" to="/register">
//                 <button>Join</button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//       {(active || pathname !== "/") && (
//         <>
//           <hr />
//           <div className="menu">
//             <Link className="link menuLink" to="/">
//               Graphics & Design
//             </Link>
//             <Link className="link menuLink" to="/">
//               Video & Animation
//             </Link>
//             <Link className="link menuLink" to="/">
//               Writing & Translation
//             </Link>
//             <Link className="link menuLink" to="/">
//               AI Services
//             </Link>
//             <Link className="link menuLink" to="/">
//               Digital Marketing
//             </Link>
//             <Link className="link menuLink" to="/">
//               Music & Audio
//             </Link>
//             <Link className="link menuLink" to="/">
//               Programming & Tech
//             </Link>
//             <Link className="link menuLink" to="/">
//               Business
//             </Link>
//             <Link className="link menuLink" to="/">
//               Lifestyle
//             </Link>
//           </div>
//           <hr />
//         </>
//       )}
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import Web3 from "web3";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "XYZ",
    isSeller: true,
  };

  const [accounts, setAccounts] = useState(null);
  const connectWallet = async () => {
    if (window.ethereum.isMetaMask) {
      const web3Instance = new Web3(window.ethereum);
      const accounts = await web3Instance.eth.requestAccounts();
      setAccounts(accounts);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">FreelanceNest</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          <div className="walletsec">
            {accounts && accounts.length > 0 && (
              <div className="connected">
                <p> Account Details</p>
                <p>Address: {accounts[0]}</p>
              </div>
            )}
            {!accounts && (
              <button onClick={connectWallet}>Connect Wallet</button>
            )}
          </div>

          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                       
                    </>
                  )}
                  
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;

