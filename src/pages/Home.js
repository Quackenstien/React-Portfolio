import React from "react";
import noats from "./noats.png";

function Home() {
  return (
    <>
      <div class="row mb-5">
        <div class="col-8">
          <div class="card mt-4 mb-4">
            <div class="card-body position-relative">
              <h1 class="text-info">About Me</h1>
              {/* <hr style={"border: 1px solid lightgrey"} /> */}

              <div class="row">
                <div class="col-12 col-md-4">
                  <div class="my-2">
                    <img
                      src={noats}
                      class="img-thumbnail float-left mr-3"
                      alt="Responsive"
                    />
                  </div>
                </div>

                <div class="col-12 col-md-8">
                  <p>
                    <h3>Hello!!!</h3>
                    My name is Donald Hawkins and I am currently studying Full
                    Stack Web Development. I am attending a University of
                    Arizona Bootcamp that aims to have me the necessary skills
                    to start my journey into the development world as well as
                    make me career ready. Pleas check out my portfolio to see
                    some examples of my recent work. You can also check out the
                    contact page if you wish to reach me. Thank you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
