import React from "react";
import "../styles/Workshop.scss";
// import "../styles/event.scss";
const Workshop = () => {
  return (
    <div className="workshop">
      <div className="heading">
        <h6> Workshop </h6>
      </div>
      <div className="workshop-container">
        <div className="card-container">
          <div className="card-heading">Robotics and AI <img src="assets/new1.png" alt="new" width={60} className="new-image"  /></div>
          
          <div className="card-content">
            <div className="Upper-rectangle">
              <img
                src="assets/workshop/myequation.jpeg"
                alt=""
                className="card-img"
              />
              <div className="Lower-rectangle">
                Microbus Society, NIT Kurukshetra in collaboration with My
                Equation, is thrilled to announce a 3-Day Workshop on Robotics
                and AI. Don't miss this unique opportunity to dive into the
                world of Artificial Intelligence and Machine Learning, gain
                hands-on experience, and earn prestigious certificates!
                <br />
                <a href="https://forms.gle/zTstKCwEiagNAJYe6">
                  Register Now !!!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card-heading">IOT</div>
          <div className="card-content">
            <div className="Upper-rectangle">
              <img src="assets/workshop/iot2.jpg" alt="" className="card-img" />
              <div className="Lower-rectangle">
                Get big, quick. Solana is made to handle thousands of
                transactions per second, and fees for both developers and users
                remain less than $0.01.Get big, quick. Solana is made to handle
                thousands of transactions per second, and fees for both
                developers and users remain less than $0.01.Get big, quick.
                Solana is made to handle thousands of transactionS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Workshop;

// {
//
// }
