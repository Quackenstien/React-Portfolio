import React from "react";

function Portfolio() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-5">
            <div className="card ">
              <div className="card-body">
                <h5 className="card-title">To Spend or Not To Spend?</h5>
                <p className="card-text">
                  An easy way to keep track of your spending.
                </p>
                <a
                  href="https://powerful-falls-38980.herokuapp.com/"
                  className="btn btn-primary"
                  target="blank"
                >
                  Budget Tracker App
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Just Notes</h5>
                <p className="card-text">Yet another note take application.</p>
                <a
                  href="https://afternoon-hamlet-61775.herokuapp.com/"
                  className="btn btn-primary"
                  target="blank"
                >
                  Notes
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">How About Some Noats?</h5>
                <p className="card-text">
                  A recipe generating application focused on using express
                  handlebars data management.
                </p>
                <a
                  href="https://thawing-shore-71367.herokuapp.com/"
                  className="btn btn-primary"
                  target="blank"
                >
                  Noats
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Need a Password?</h5>
                <p className="card-text">
                  This a simple password generator built using vanilla
                  JavaScript, HTML, and CSS.
                </p>
                <a
                  href="https://quackenstien.github.io/Password-Generator/"
                  className="btn btn-primary"
                  target="blank"
                >
                  Password Generator
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
