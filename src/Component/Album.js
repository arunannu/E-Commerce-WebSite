import React from "react";

const Album = () => {
  return (
    <section>
      <div className="container p-4">
        <h1 className="text-center">Music</h1>
        <div className="center-div">
          <div className="row">
            <div className="col-6 col-12">
              <div className="row">
                <div
                  className="col-12 bg-warning"
                  style={{
                    height: "400px",
                    width: "400px",
                  }}
                ></div>
                <div className="col-12 bg-secondary">Lokesh</div>
              </div>
            </div>
            <div className="col-6 col-12">
              <div className="row">
                <div
                  className="col-12 bg-dark"
                  style={{ height: "400px", width: "400px" }}
                >
                  Shubhi
                </div>
                <div
                  className="col-12 bg-success"
                  style={{ height: "400px", width: "400px" }}
                >
                  Shubhi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Album;
