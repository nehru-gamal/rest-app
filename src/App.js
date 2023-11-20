import Header from "./component/Header";
import Navs from "./component/Navs";
import myData from "./component/Data";

import "bootstrap";

import "./App.css";

import image from "./Images/1.png";
import img1 from "./Images/2 (1).png";
import cover from "./Images/cover.jpg";

function App() {
    return (
        <div className="App">
            <Navs />
            <Header />
            <div className="section1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            1287+
                            <span>SAVINGS</span>
                        </div>
                        <div className="col-md-3">
                            5786+
                            <span>PHOTOS </span>
                        </div>
                        <div className="col-md-3">
                            1440+
                            <span>ROCKETS</span>
                        </div>
                        <div className="col-md-3">
                            7110+
                            <span>GLOBES</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <img src={image} alt=""></img>
                        </div>
                        <div className="col-md-5">
                            <div className="info">
                                <h2>
                                    We pride ourselves on making real food from
                                    the best ingredients.
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Etiam et purus a odio
                                    finibus bibendum in sit amet leo. Mauris
                                    feugiat erat tellus Lorem ipsum dolor sit
                                    amet.
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info">
                                <h2>
                                    We make everything by hand with the best
                                    possible ingredients.
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Etiam et purus a odio
                                    finibus bibendum in sit amet leo. Mauris
                                    feugiat erat tellus.Far far away, behind the
                                    word mountains, far from the countries
                                    Vokalia and Consonantia, there live the
                                    blind texts Mauris feugiat erat tellus.Far
                                    far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia.
                                </p>
                                <ul>
                                    <li>
                                        <span>#</span> Etiam sed dolor ac diam
                                        volutpat.
                                    </li>
                                    <li>
                                        <span>#</span> Erat volutpat aliquet
                                        imperdiet.
                                    </li>
                                    <li>
                                        <span>#</span> purus a odio finibus
                                        bibendum.
                                    </li>
                                </ul>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={img1} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section4">
                <img src={cover} alt=""></img>
                <div className="container">
                    <div className="info">
                        <h2>
                            When a man's stomach is full it makes no difference
                            whether he is rich or poor.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus bibendum in sit
                            amet leo. Mauris feugiat erat tellus.
                        </p>
                        <a href="/#">Watch Our Story</a>
                    </div>
                </div>
            </div>
            <div className="section5">
                <div className="container">
                    <div className="row">
                        <div className="info col-md-12">
                            <h2>Explore Our Foods</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam et purus a odio finibus
                                bibendum in sit amet leo. Mauris feugiat erat
                                tellus. Far far away, behind the word mountains,
                                far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Etiam et purus a
                                odio finibus bibendum in sit amet leo. Mauris .
                            </p>
                        </div>
                        {myData.map((item) => (
                            <div key={item.id} className="col-md-4">
                                <img src={item.img} alt=""></img>
                                <div className="infoData">
                                    <h2>{item.title}</h2>
                                    <h4>{item.time}</h4>
                                    <h3>{item.price}</h3>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="section6">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="row">

                        <div className="col-6">
                            <h3>
                                ~ Is Foodera Bread really baked fresh each day?
                            </h3>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, a large language.
                            </p>
                        </div>

                        <div className="col-6">
                            <h3>
                                ~ Is Foodera Bread really baked fresh each day?
                            </h3>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, a large language.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h3>
                                ~ Is Foodera Bread really baked fresh each day?
                            </h3>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, a large language.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h3>
                                ~ Is Foodera Bread really baked fresh each day?
                            </h3>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, a large language.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                
            </footer>
        </div>
    );
}

export default App;
