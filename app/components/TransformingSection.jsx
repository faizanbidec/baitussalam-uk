// "use client";
// import React from "react";

// const TransformingSection = () => {
//   const dropdowns = [
//     ["Services", ["Education", "Healthcare"]],
//     ["Program", ["Monthly", "Yearly"]],
//     ["Single Payment", ["Recurring"]],
//     ["$100", ["$250", "$500"]],
//     ["Sadaqah", ["Zakat", "Donation"]],
//   ];

//   const stats = [
//     { img: "/img1.png", title: "5000+ Meals", desc: "distributed annually" },
//     { img: "/img2.png", title: "1200+ Children", desc: "supported with education" },
//     { img: "/img3.png", title: "50+ Community", desc: "projects launched" },
//     { img: "/img4.png", title: "100+ Volunteers", desc: "engaged" },
//   ];

//   return (
//     <section
//       style={{
//         position: "relative",
//         backgroundImage: "url('/sec2.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         textAlign: "center",
//         color: "white",
//         padding: "2rem 1rem 10rem",
//         borderBottom: "3px solid #BC153F",
//         overflow: "visible",
//       }}
//     >
//       {/* Blue Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundColor: "rgba(34, 48, 91, 0.95)",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Main Content */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           maxWidth: "1200px",
//           margin: "0 auto",
//           width: "100%",
//         }}
//       >
//         {/* Dropdowns and Donate Button */}
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: "0.8rem",
//             padding: "0 1rem",
//             marginBottom: "1.5rem",
//             marginTop: "1.5rem",
//           }}
//         >
//           {dropdowns.map(([label, options], i) => (
//             <select
//               key={i}
//               defaultValue={options[0]} // ✅ show first option by default
//               style={{
//                 backgroundColor: "white",
//                 color: "black",
//                 padding: "0.6rem 1.5rem",
//                 borderRadius: "12px",
//                 textAlign: "center",
//                 outline: "none",
//                 border: "1px solid #ccc",
//                 cursor: "pointer",
//                 minWidth: "120px",
//                 fontSize: "clamp(0.8rem, 2vw, 1rem)",
//                 fontFamily: "Rubik, sans-serif",
//               }}
//             >
//               {options.map((opt, j) => (
//                 <option key={j}>{opt}</option>
//               ))}
//             </select>
//           ))}
//           <button
//             style={{
//               backgroundColor: "#BC153F",
//               color: "white",
//               padding: "0.6rem 1.8rem",
//               borderRadius: "9999px",
//               fontWeight: 500,
//               fontSize: "clamp(0.9rem, 2vw, 1rem)",
//               border: "none",
//               cursor: "pointer",
//               transition: "background-color 0.3s ease",
//               fontFamily: "Rubik, sans-serif",
//             }}
//           >
//             Donate Now
//           </button>
//         </div>

//         {/* Heading */}
//         <h3
//           style={{
//             fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
//             fontWeight: 600,
//             fontFamily: "Rubik, sans-serif",
//           }}
//         >
//           Transforming Lives Through Your Support
//         </h3>
//       </div>

//       {/* Stats Circles */}
//       <div className="stats-container">
//         {stats.map((item, i) => (
//           <div key={i} className="stat-item">
//             <div className="stat-circle">
//               <img src={item.img} alt={item.title} className="stat-img" />
//             </div>
//             <p className="stat-text">
//               {item.title}
//               <br />
//               <span>{item.desc}</span>
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Responsive Styles */}
//       <style jsx>{`
//         .stats-container {
//           position: absolute;
//           left: 50%;
//           bottom: -120px;
//           transform: translateX(-50%);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           gap: 5rem;
//           text-align: center;
//           z-index: 3;
//           flex-wrap: nowrap;
//           flex-direction: row;
//         }

//         .stat-item {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           min-width: 120px;
//         }

//         .stat-circle {
//           width: clamp(80px, 12vw, 130px);
//           height: clamp(80px, 12vw, 130px);
//           border-radius: 50%;
//           background-color: white;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
//           overflow: hidden;
//           border: 2px solid #bc153f;
//         }

//         .stat-img {
//           width: 50%;
//           height: 50%;
//           object-fit: contain;
//         }

//         .stat-text {
//           font-weight: 600;
//           font-size: clamp(0.9rem, 2vw, 1rem);
//           margin-top: 0.75rem;
//           color: black;
//           line-height: 1.3;
//         }

//         .stat-text span {
//           font-weight: 500;
//           font-size: clamp(0.8rem, 1.8vw, 0.9rem);
//           color: black;
//         }

//         @media (max-width: 1024px) {
//           .stats-container {
//             bottom: -70px;
//             flex-wrap: wrap;
//             gap: 1.5rem;
//           }
//         }
//           /* Tablets & small desktops */
// @media (min-width: 601px) and (max-width: 1024px) {
//   .stats-container {
//     bottom: -90px; /* thoda kam than desktop */
//     gap: 2rem;     /* gap thoda kam for medium screens */
//     flex-wrap: wrap; /* wrap so items don’t overflow */
//   }

//   .stat-item {
//     min-width: 100px; /* adjust width for tablets */
//   }

//   section {
//     padding: 3rem 1rem 8rem; /* adjust padding for medium screens */
//   }
// }


//         @media (max-width: 600px) {
//           section {
//             padding: 4rem 1rem 6rem;
//           }

//           .stats-container {
//             position: relative;
//             left: 0;
//             bottom: 0;
//             transform: none;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             gap: 1.5rem;
//             margin: 0.5rem auto 0;
//             text-align: center;
//             width: 100%;
//           }

//           .stat-item {
//             min-width: 90px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TransformingSection;
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DonationModal from "./Donationform";
import useCausesStore from "../stores/useCausesStore";
import useCampaignsStore from "../stores/useCampaignsStore";

const TransformingSection = () => {
  const [selectedService, setSelectedService] = useState("");
    const [  selectedCampaign, setSelectedCampaign] = useState("");
  const [donationFrequency, setDonationFrequency] = useState("One-Time");
  const [donationType, setDonationType] = useState("Zakat");
  const [amount, setAmount] = useState("100");
  const [showDonateModal, setShowDonateModal] = useState(false);

  const { causes, loading: causesLoading, fetchCauses } = useCausesStore();
  const { campaigns, loading: campaignsLoading, fetchCampaigns } = useCampaignsStore();

  // Fetch data if not available
  useEffect(() => {
    if (causes.length === 0) {
      fetchCauses();
    }
    if (campaigns.length === 0) {
      fetchCampaigns();
    }
  }, [causes.length, campaigns.length, fetchCauses, fetchCampaigns]);

  // Preset amounts for dropdown
  const presetAmounts = ["25", "50", "100", "250", "500"];

  // Handle Donate Now click - open modal with pre-filled values
  const handleDonateNow = () => {
    setShowDonateModal(true);
  };

  // Filter campaigns based on selectedService
const filteredCampaigns = selectedService
  ? campaigns.filter(c => c.relatedService === selectedService)
  : campaigns;

// Filter services based on selectedCampaign
const filteredServices = selectedCampaign
  ? causes.filter(c => c.relatedCampaigns?.includes(selectedCampaign))
  : causes;


  const stats = [
    { img: "/img1.png", title: "1.6B+ ", desc: "Spent on Food Aid" },
    { img: "/img2.png", title: "405+", desc: "Educational Institutions" },
    { img: "/img3.png", title: "800K+ ", desc: "Healthcare Recipients" },
    { img: "/img4.png", title: "65K+", desc: "Sheltered Lives" },
  ];

  return (
    <section
      style={{
        position: "relative",
        backgroundImage: "url('/sec2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        color: "white",
        padding: "2rem 1rem 9rem",
        borderBottom: "3px solid #BC153F",
        overflow: "visible",
      }}
    >
      {/* Blue Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(34, 48, 91, 0.95)",
          zIndex: 1,
        }}
      ></div>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Dropdowns and Donate Button */}
        <div
          className="dropdown-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.8rem",
            padding: "0 1rem",
            marginBottom: "1.5rem",
            marginTop: "1.5rem",
          }}
        >
          {/* Service Dropdown */}
         {/* Service Dropdown */}
<select
  value={selectedService}
  onChange={(e) => {
    setSelectedService(e.target.value);
    if (e.target.value) setSelectedCampaign(""); // optional: reset campaign
  }}
  className="responsive-dropdown "
  disabled={!!selectedCampaign} // disable if campaign is selected
  style={{
    backgroundColor: "white",
    color: "black",
   
    borderRadius: "12px",
    textAlign: "center",
    outline: "none",
    border: "1px solid #ccc",
    cursor: !!selectedCampaign ? "not-allowed" : "pointer",
   maxWidth: "220px",
    fontSize: "clamp(0.8rem, 2vw, 1rem)",
    fontFamily: "Rubik, sans-serif",
    transition: "width 0.3s ease",
  }}
>
  <option value="">Select Service</option>
  {causes.map((cause) => (
    <option key={cause.slug || cause.id} value={cause.title}>
      {cause.title}
    </option>
  ))}
</select>



{/* Campaign Dropdown */}
<select
  value={selectedCampaign}
  onChange={(e) => {
    setSelectedCampaign(e.target.value);
    if (e.target.value) setSelectedService(""); // optional: reset service
  }}
  className="responsive-dropdown"
  disabled={!!selectedService} // disable if service is selected
  style={{
    backgroundColor: "white",
    color: "black",
    
    borderRadius: "12px",
    textAlign: "center",
    outline: "none",
    border: "1px solid #ccc",
    cursor: !!selectedService ? "not-allowed" : "pointer",
    maxWidth: "220px",
    fontSize: "clamp(0.8rem, 2vw, 1rem)",
    fontFamily: "Rubik, sans-serif",
    transition: "width 0.3s ease",
  }}
>
  <option value="">Select Program</option>
  {campaigns.map((camp) => (
    <option key={camp.slug || camp.id} value={camp.title}>
      {camp.title}
    </option>
  ))}
</select>


          {/* Donation Frequency Dropdown */}
          <select
            value={donationFrequency}
            onChange={(e) => setDonationFrequency(e.target.value)}
            className="responsive-dropdown"
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "0.6rem 1.5rem",
              borderRadius: "12px",
              textAlign: "center",
              outline: "none",
              border: "1px solid #ccc",
              cursor: "pointer",
              minWidth: "120px",
              fontSize: "clamp(0.8rem, 2vw, 1rem)",
              fontFamily: "Rubik, sans-serif",
              transition: "width 0.3s ease",
            }}
          >
            {["One-Time", "Monthly", "Yearly"].map((freq) => (
              <option key={freq} value={freq}>
                {freq}
              </option>
            ))}
          </select>

          {/* Donation Type Dropdown */}
          <select
            value={donationType}
            onChange={(e) => setDonationType(e.target.value)}
            className="responsive-dropdown"
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "0.6rem 1.5rem",
              borderRadius: "12px",
              textAlign: "center",
              outline: "none",
              border: "1px solid #ccc",
              cursor: "pointer",
              minWidth: "120px",
              fontSize: "clamp(0.8rem, 2vw, 1rem)",
              fontFamily: "Rubik, sans-serif",
              transition: "width 0.3s ease",
            }}
          >
            {["Zakat", "Sadqah", "General Donation"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {/* Amount Dropdown */}
          <select
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="responsive-dropdown"
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "0.6rem 1.5rem",
              borderRadius: "12px",
              textAlign: "center",
              outline: "none",
              border: "1px solid #ccc",
              cursor: "pointer",
              minWidth: "120px",
              fontSize: "clamp(0.8rem, 2vw, 1rem)",
              fontFamily: "Rubik, sans-serif",
              transition: "width 0.3s ease",
            }}
          >
            {presetAmounts.map((amt) => (
              <option key={amt} value={amt}>
                £{amt}
              </option>
            ))}
          </select>

          {/* Donate Now Button */}
          <button
            onClick={handleDonateNow}
            style={{
              backgroundColor: "#BC153F",
              color: "white",
              padding: "0.6rem 1.8rem",
              borderRadius: "9999px",
              fontWeight: 500,
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              fontFamily: "Rubik, sans-serif",
            }}
          >
            Donate Now
          </button>
        </div>

        {/* Heading */}
        <h5
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)",
            fontWeight: 600,
            fontFamily: "Rubik, sans-serif",
          }}
        >
         Impacting Lives with a Trusted Islamic Charity
        </h5>
      </div>

      {/* Stats Circles */}
      <div className="stats-container">
        {stats.map((item, i) => (
          <div key={i} className="stat-item">
            <div className="stat-circle">
              <Image
                src={item.img}
                alt={item.title}
                width={65}
                height={65}
                className="stat-img"
                unoptimized={true}
                style={{ width: "50%", height: "50%", objectFit: "contain" }}
              />
            </div>
            <p className="stat-text">
              {item.title}
              <br />
              <span>{item.desc}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Donation Modal */}
      {showDonateModal && (
        <DonationModal
          open={showDonateModal}
          setOpen={setShowDonateModal}
          selectedService={selectedService}
            selectedCampaign={  selectedCampaign}
          initialAmount={amount}
          initialDonationFrequency={donationFrequency}
          initialDonationType={donationType}
          causesData={causes}
        />
      )}

      {/* ✅ Responsive Styles */}
      <style jsx>{`
        .stats-container {
          position: absolute;
          left: 50%;
          bottom: -120px;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          text-align: center;
          z-index: 3;
          flex-wrap: nowrap;
          flex-direction: row;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 190px;
        }

        .stat-circle {
          width: clamp(80px, 12vw, 130px);
          height: clamp(80px, 12vw, 130px);
          border-radius: 50%;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          border: 2px solid #bc153f;
        }

        .stat-img {
          width: 50%;
          height: 50%;
          object-fit: contain;
        }
        
        .stat-circle {
          position: relative;
        }

        .stat-text {
          font-weight: 600;
          font-size: clamp(0.9rem, 2vw, 1rem);
          margin-top: 0.75rem;
          color: black;
          line-height: 1.3;
        }

        .stat-text span {
          font-weight: 500;
          font-size: clamp(0.8rem, 1.8vw, 0.9rem);
          color: black;
        }

        @media (max-width: 1024px) {
          .stats-container {
            bottom: -70px;
            flex-wrap: wrap;
            gap: 1.5rem;
          }
        }

        @media (min-width: 601px) and (max-width: 1024px) {
          .stats-container {
            bottom: 17px;
            gap: 2rem;
            flex-wrap: wrap;
          }
          .stat-item {
            min-width: 100px;
          }
          section {
            padding: 3rem 1rem 8rem;
            min-height: 610px;
          }
          .stat-text,
          .stat-text span {
            color: white;
          }
        }

        /* 📱 Small Screens - dropdown width balanced */
        @media (max-width: 600px) {
          .responsive-dropdown {
            width: 45%;
          }

          .dropdown-container {
            gap: 0.6rem;
          }

          section {
            padding: 4rem 1rem 6rem;
          }

          .stats-container {
            position: relative;
            left: 0;
            bottom: 0;
            transform: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            margin: 0.5rem auto 0;
            text-align: center;
            width: 100%;
          }

          .stat-text,
          .stat-text span {
            color: white;
          }
        }
      `}</style>
    </section>
  );
};

export default TransformingSection;
