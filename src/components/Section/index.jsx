import React, { Component } from 'react';
/* eslint-disable*/

class Section extends Component {
  constructor(props) {
    super(props);
  }

  renderRightOrientation = () => {
    return (
      <section
        className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
        id="first"
      >
        <div className="content">
          <h2>Magna etiam feugiat</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul className="actions stacked">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div className="image">
          <img src="images/spotlight01.jpg" alt="" />
        </div>
      </section>
    );
  };

  renderLeftOrientation = () => {
    return (
      <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
        <div class="content">
          <h2>Tempus adipiscing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="#" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src="images/spotlight02.jpg" alt="" />
        </div>
      </section>
    );
  };

  render() {
    return (
      <>
        {this.props.side === 'right' && this.renderRightOrientation()}
        {this.props.side === 'left' && this.renderLeftOrientation()}
      </>
    );
  }
}

export default Section;
