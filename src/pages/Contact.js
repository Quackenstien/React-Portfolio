import React from "react";

function Contact() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="card mt-4 mb-4">
            <div className="card-body position-relative">
              <h1 className="card-title text-info">Contact</h1>
              {/* <hr style="border: 1px solid lightgrey;" /> */}
              <p className="card-text">
                Email: DonaldHawkins422@Gmail.com
                <br />
                <br />
                <a href="https://github.com/Quackenstien"> GitHub</a>
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
