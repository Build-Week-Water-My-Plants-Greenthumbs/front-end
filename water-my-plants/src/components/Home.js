import React from "react";

const Home = () => {
  return (
    <div id="wrapper">
      <section class="intro">
        <header>
          <ul class="actions">
            <li>
              <button class="button primary">Sign In</button>
            </li>
            <li>
              <a href="#first" class="arrow scrolly">
                <span class="label">Next</span>
              </a>
            </li>
          </ul>
        </header>
        <div class="content">
          <span class="image fill" data-position="center">
            <img src="images/pic01.jpg" alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Awesome Features</h2>
        </header>
        <div class="content">
          <p>
            <strong>Etiam tristique libero</strong> eu nibh porttitor amet
            fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies
            condimentum.
          </p>
          <ul class="feature-icons">
            <li class="icon solid fa-laptop">Consequat tempus</li>
            <li class="icon solid fa-bolt">Etiam adipiscing</li>
            <li class="icon solid fa-signal">Libero nullam</li>
            <li class="icon solid fa-cog">Blandit condimentum</li>
            <li class="icon solid fa-map-marker-alt">Lorem ipsum dolor</li>
            <li class="icon solid fa-code">Nibh amet venenatis</li>
          </ul>
          <p>
            Vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>Photo Gallery</h2>
        </header>
        <div class="content">
          <p>
            <strong>Healthy Plants</strong> nam maximus erat id euismod egestas.
            Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
          </p>

          <section>
            <div class="content">
              <div class="gallery">
                <a href="images/gallery/fulls/01.jpg" class="landscape">
                  <img src="images/gallery/thumbs/01.jpg" alt="" />
                </a>
                <a href="images/gallery/fulls/02.jpg">
                  <img src="images/gallery/thumbs/02.jpg" alt="" />
                </a>
                <a href="images/gallery/fulls/03.jpg">
                  <img src="images/gallery/thumbs/03.jpg" alt="" />
                </a>
                <a href="images/gallery/fulls/04.jpg" class="landscape">
                  <img src="images/gallery/thumbs/04.jpg" alt="" />
                </a>
              </div>
            </div>
          </section>
          <section>
            <header>
              <h3>Meet The Team</h3>
            </header>
            <div class="content">
              <div class="gallery">
                <a href="images/gallery/fulls/08.jpg" class="portrait">
                  <img src="images/gallery/thumbs/08.jpg" alt="" />
                </a>
                <a href="images/gallery/fulls/09.jpg" class="portrait">
                  <img src="images/gallery/thumbs/09.jpg" alt="" />
                </a>
                <a href="images/gallery/fulls/10.jpg" class="landscape">
                  <img src="images/gallery/thumbs/10.jpg" alt="" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <header>
          <h2>Get in touch</h2>
        </header>
        <div class="content">
          <p>
            <strong>Auctor commodo</strong> interdum et malesuada fames ac ante
            ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet
            dolor mattis sagittis.
          </p>
          <form>
            <div class="fields">
              <div class="field half">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="field">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="7"
                ></textarea>
              </div>
            </div>
            <ul class="actions">
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  class="button primary"
                />
              </li>
            </ul>
          </form>
        </div>
        <footer>
          <ul class="items">
            <li>
              <h3>Email</h3>
              <a href="#">information@untitled.ext</a>
            </li>
            <li>
              <h3>Phone</h3>
              <a href="#">(000) 000-0000</a>
            </li>
            <li>
              <h3>Address</h3>
              <span>1234 Somewhere Road, Nashville, TN 00000</span>
            </li>
            <li>
              <h3>Elsewhere</h3>
              <ul class="icons">
                <li>
                  <a href="#" class="icon brands fa-twitter">
                    <span class="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon brands fa-facebook-f">
                    <span class="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon brands fa-instagram">
                    <span class="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon brands fa-linkedin-in">
                    <span class="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon brands fa-github">
                    <span class="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon brands fa-codepen">
                    <span class="label">Codepen</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
      </section>

      <div class="copyright">
        &copy; Untitled. All rights reserved. Design:
        <a href="https://html5up.net">HTML5 UP</a>.
      </div>
    </div>
  );
};

export default Home;
