import React from "react";
 import cactus from "../images/cactus.jpg";
 import ficus from "../images/ficus.jpg";


const Home = () => {
  return (
    <div id="wrapper">
      <section className="intro">
        <header>
        <header className="features-section">
          <h2>"The Plant Watering App with Awesome Features" - The New York Times</h2>
          <h2> "Really Awesome Features" - The National Inquirer</h2>
        </header>
        </header>
        <div className="bg_image">
          <span className="image fill" data-position="center">
            <img src={cactus} alt="cactus" width="50%" height="auto" />
          </span>
        </div>
      </section>

      <section>
       
        <div className="content">
          <h3>
            <strong>Water My Plants</strong> is a brand new app that will simplify the plant watering process for you, so that you can focus 
            on keeping yourself alive.
          </h3>
          <div className="feature-icons">
          <ul>
            <li className="fa fa-heart-o"> Keep Plants Healthy</li>
            <br />
            <li className="fa fa-pie-chart"> Creates Less Work</li>
            <br />
            <li className="fa fa-hand-spock-o"> More Time For Fun</li>
            <br />
            <li className="fa fa-usd"> Eliminates Stress</li>
            <br />
            <li className="fa fa-file-excel-o"> Less Thinking</li>
            </ul>
            </div>
          <h3>
           <strong> Water My Plants</strong> is where nature and technology meet to keep you and your plants happy and healthy.
          </h3>
        </div>
      </section>

      <section>
       
        <div className="content1">
          <h2>
            <strong>Healthy Plants</strong> are plants that are in good health. Are your plants in good health?
          </h2>
          <div className="bg_image">
          <span className="image fill" data-position="center">
            <img src={ficus} alt="cactus" width="50%" height="auto" />
          </span>
        </div>

        </div>
      
      <div className="content">
        <header>
          <h2>Get in touch</h2>
        </header>
      
          <p>
            <strong>Water my Plants</strong> is interested in hearing your feedback! 

          </p>
          <form>
            <div className="fields">
              <div className="field_half">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="field_half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="field_half">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="7"
                ></textarea>
              </div>
            </div>
            <ul className="actions">
                  <input
                  type="submit"
                  value="Send Message"
                  className="button primary"
                />
        
            </ul>
          </form>
        </div>
        <footer>
          <div className="contact_section">
          <ul className="items">
           
              <h3>Email</h3>
              <p>information@untitled.ext</p>
           
            
              <h3>Phone</h3>
              <p>(000) 000-0000</p>
         
           
              <h3>Address</h3>
              <span>1234 Somewhere Road, Nashville, TN 00000</span>
           
            
              <ul className="icons">
            
                  <p className="fa fa-twitter fa-fw">
                    <span className="label"></span>
                  </p>
        
           
                  <p className="fa fa-facebook-f fa-fw">
                    <span className="label"></span>
                  </p>
            
                  <p className="fa fa-instagram fa-fw">
                    <span className="label"></span>
                  </p>
            
                
                  <p className="fa fa-github fa-fw">
                    <span className="label"></span>
                  </p>
             
                  <p className="fa fa-codepen fa-fw">
                    <span className="label"></span>
                  </p>
         
              </ul>
          
          </ul>
          </div>
        </footer>
      </section>

      <div className="copyright">
        &copy; Untitled. All rights reserved. Design:
        <a href="https://html5up.net">HTML5 UP</a>.
      </div>
    </div>
  );
};

export default Home;
