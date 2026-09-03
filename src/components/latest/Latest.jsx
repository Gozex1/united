import { FaUser, FaCalendarAlt, FaEye, FaArrowRight } from "react-icons/fa";
import sam from "../../assets/unsplash_6MNmDi1hc_Y.svg";
import watch from "../../assets/unsplash_iZVrfElG1t0.svg";

import "./Latest.css";

function Latest() {
  return (
    <section className="container">
      <div className="latest-news">
        <h2 className="latest-title">Latest News</h2>

        <div className="news-wrapper">
          <div className="news-card">
            <img src={watch} alt="Smart watch" className="news-image" />

            <div className="news-info">
              <div className="news-meta">
                <span>
                  <FaUser />
                  Kristin
                </span>

                <span>
                  <FaCalendarAlt />
                  19Dec, 2013
                </span>

                <span>
                  <FaEye />
                  453
                </span>
              </div>

              <h3>
                Cras nisl dolor, accumsan et metus sit amet, vulputate
                condimentum dolor.
              </h3>

              <p>
                Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                molestie lectus, tincidunt malesuada arcu metus posuere metus.
              </p>

              <button className="read-more">
                READ MORE
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="news-card">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
              alt="Computer circuit"
              className="news-image"
            />

            <div className="news-info">
              <div className="news-meta">
                <span>
                  <FaUser />
                  Robert
                </span>

                <span>
                  <FaCalendarAlt />
                  28 Nov, 2015
                </span>

                <span>
                  <FaEye />
                  738
                </span>
              </div>

              <h3>
                Curabitur pulvinar aliquam lectus, non blandit erat mattis
                vitae.
              </h3>

              <p>
                Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
                odio, vulputate at tortor vitae, hendrerit blandit lorem.
              </p>

              <button className="read-more">
                READ MORE
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="news-card">
            <img src={sam} alt="Smartphone" className="news-image" />

            <div className="news-info">
              <div className="news-meta">
                <span>
                  <FaUser />
                  Arlene
                </span>

                <span>
                  <FaCalendarAlt />9 May, 2014
                </span>

                <span>
                  <FaEye />
                  826
                </span>
              </div>

              <h3>
                Curabitur massa orci, consectetur et blandit ac, auctor et
                tellus.
              </h3>

              <p>
                Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta,
                odio id suscipit mattis, risus augue condimentum purus.
              </p>

              <button className="read-more">
                READ MORE
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latest;
