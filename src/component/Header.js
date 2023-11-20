import React from "react";

import "./Header.css";

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="info col-md-6">
                        <h3>Good food choices are good investments.</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus bibendum amet
                            leo.
                        </p>
                        <button type="button" className="btn btn-danger">
                            Order Now
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                        >
                            Learn More
                        </button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </header>
    );
}
