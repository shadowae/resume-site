import React, { Component } from 'react';
// import { Navbar } from 'react-bootstrap';
import './App.css';
import Section from '../Section';
import Banner from '../Banner';
import GridDrisplay from '../GridDrisplay';
import GridDisplayMockData from '../../mocks/GridDisplay';
// import Header from '../Header';
// import Timeline from '../Timeline';
// import mocks from '../../mocks';

// const { VerticalTimelineSample } = mocks;
/* eslint-disable */
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Navbar expand="true">*/}
        {/*<Navbar.Brand href="#home">Navbar with text</Navbar.Brand>*/}
        {/*<Navbar.Toggle />*/}
        {/*<Navbar.Collapse className="justify-content-end">*/}
        {/*<Navbar.Text>*/}
        {/*Signed in as: <a href="#login">Mark Otto</a>*/}
        {/*</Navbar.Text>*/}
        {/*</Navbar.Collapse>*/}
        {/*</Navbar>*/}
        {/*<Header />*/}
        {/*<Timeline vtlElements={VerticalTimelineSample} />*/}

        {/*Wrapper*/}
        <div id="wrapper" class="divided">
          {/*One  */}
          <Banner />
          {<Section side={'left'} />}
          {<Section side={'right'} />}

          {/*Five*/}
          <section class="wrapper style1 align-center">
            <div class="inner">
              <h2>Massa sed condimentum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                id ante sed ex pharetra lacinia sit amet vel massa. Donec
                facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce
                lorem lectus, pharetra pretium massa et, hendrerit vestibulum
                odio lorem ipsum.
              </p>
            </div>

            {/*Gallery*/}
            <div class="gallery style2 medium lightbox onscroll-fade-in">
              <article>
                <a href="images/gallery/fulls/01.jpg" class="image">
                  <img src="images/gallery/thumbs/01.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Ipsum Dolor</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <a href="images/gallery/fulls/02.jpg" class="image">
                  <img src="images/gallery/thumbs/02.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Feugiat Lorem</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <a href="images/gallery/fulls/03.jpg" class="image">
                  <img src="images/gallery/thumbs/03.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Magna Amet</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <a href="images/gallery/fulls/04.jpg" class="image">
                  <img src="images/gallery/thumbs/04.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Sed Tempus</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <a href="images/gallery/fulls/05.jpg" class="image">
                  <img src="images/gallery/thumbs/05.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Ultrices Magna</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <a href="images/gallery/fulls/06.jpg" class="image">
                  <img src="images/gallery/thumbs/06.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Sed Tempus</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <a href="images/gallery/fulls/07.jpg" class="image">
                  <img src="images/gallery/thumbs/07.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Ipsum Lorem</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <a href="images/gallery/fulls/08.jpg" class="image">
                  <img src="images/gallery/thumbs/08.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Magna Risus</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <a href="images/gallery/fulls/09.jpg" class="image">
                  <img src="images/gallery/thumbs/09.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Tempus Dolor</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <a href="images/gallery/fulls/10.jpg" class="image">
                  <img src="images/gallery/thumbs/10.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Sed Etiam</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <a href="images/gallery/fulls/11.jpg" class="image">
                  <img src="images/gallery/thumbs/11.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Magna Lorem</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
              <article>
                <a href="images/gallery/fulls/12.jpg" class="image">
                  <img src="images/gallery/thumbs/12.jpg" alt="" />
                </a>
                <div class="caption">
                  <h3>Ipsum Dolor</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam
                    sed ultrices.
                  </p>
                  <ul class="actions fixed">
                    <li>
                      <span class="button small">Details</span>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </section>

          <GridDrisplay data={GridDisplayMockData} />

          {/*Seven*/}
          <section class="wrapper style1 align-center">
            <div class="inner medium">
              <h2>Get in touch</h2>
              <form method="post" action="#">
                <div class="fields">
                  <div class="field half">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" value="" />
                  </div>
                  <div class="field half">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" value="" />
                  </div>
                  <div class="field">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="6" />
                  </div>
                </div>
                <ul class="actions special">
                  <li>
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      value="Send Message"
                    />
                  </li>
                </ul>
              </form>
            </div>
          </section>

          {/*Footer*/}
          <footer class="wrapper style1 align-center">
            <div class="inner">
              <ul class="icons">
                <li>
                  <a href="#" class="icon brands style2 fa-twitter">
                    <span class="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon brands style2 fa-facebook-f">
                    <span class="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon brands style2 fa-instagram">
                    <span class="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon brands style2 fa-linkedin-in">
                    <span class="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon style2 fa-envelope">
                    <span class="label">Email</span>
                  </a>
                </li>
              </ul>
              <p>
                &copy; Untitled. Design:{' '}
                <a href="https://html5up.net">HTML5 UP</a>.
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
