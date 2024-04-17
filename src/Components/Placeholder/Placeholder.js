import React from "react";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/Sidebar";
import "./Placeholder.css";

const Placeholder = ({ handleLinkClick, showSidebar, toggleSidebar,setCredit,credit }) => {
  return (
    <>
      <Sidebar handleLinkClick={handleLinkClick} showSidebar={showSidebar} />
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} setCredit={setCredit}
                credit={credit}/>
      <div className="col-lg-10 home-h order-lg-3 mt-5">
        <div className="mt-5">
          <div className="row">
            <div className="col-lg-9 order-lg-1 order-2">
              <div className="pt-1">
                <div className=" placeholde-h">
                  <h2 className="py-3 ms-4 px-2">Placeholder</h2>
                </div>
                <div className="pt-5 px-5">
                  <h4>Thank you for reading this</h4>

                  <p className="mt-4">Dear Client</p>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia.
                  </p>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia.
                  </p>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia.
                  </p>
                  <p>
                    Should you require any further assistance or have any
                    questions regarding the documentation or any other aspect of
                    your project, please feel free to reach out to our team. We
                    are committed to providing you with the highest level of
                    support and ensuring the success of your endeavor.
                  </p>
                  <p className="mt-3">Best regards,</p>
                  <p>James Kelly,</p>
                  <p>Samurai</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 pt-5 px-5 d-lg order-lg-2 order-1">
              <p>Intoduction</p>
              <p>Quick Setup</p>
              <p>Build Assets</p>
              <p>Multi-demo</p>
              <p>File Structure</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placeholder;
