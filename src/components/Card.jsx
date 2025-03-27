import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="cards-container">
        <div className="card card-5">
          <div className="card__icon">🌐</div>
          <p className="card__exit">※</p>
          <div className="text">We offer professional web development services to help you build a strong online presence.</div>
          <p className="card__apply">
            <p className="card__link" href="#">Web Development </p>
          </p>
        </div>
        <div className="card card-5">
          <div className="card__icon">📈</div>
          <p className="card__exit">※</p>
          <div className="text">Improve your websites visibility on search engines with our SEO optimization services.</div>
          <p className="card__apply">
            <p className="card__link" href="#">SEO Optimization</p>
          </p>
        </div>
        <div className="card card-5">
          <div className="card__icon">🪄</div>
          <p className="card__exit">※</p>
          <div className="text">Our UI/UX design services ensure that your website is user-friendly and visually appealing.</div>
          <p className="card__apply">
            <p className="card__link" href="#">UI/UX Design </p>
          </p>
        </div>
        <div className="card card-5">
          <div className="card__icon">🎨</div>
          <p className="card__exit">※</p>
          <div className="text">We provide creative logo design services to help you establish a unique brand identity.</div>
          <p className="card__apply">
            <p className="card__link" href="#">Logo Design </p>
          </p>
        </div>
        <div className="card card-5">
          <div className="card__icon">✎ᝰ</div>
          <p className="card__exit">※</p>
          <div className="text">Our content writing services will help you create engaging and informative content for your audience.</div>
          <p className="card__apply">
            <p className="card__link" href="#">Content Writing</p>
          </p>
        </div>
        <div className="card card-5">
          <div className="card__icon">🗜️</div>
          <p className="card__exit">※</p>
          <div className="text">Our graphic design services will help you create stunning visuals for your brand.</div>
          <p className="card__apply">
            <p className="card__link" href="#">Graphic Design </p>
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  justify-content: center;
  padding: 20px;
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

  .card {
    padding: 20px;
    width: 300px;
    min-height: 200px;
    display: grid;
    grid-template-rows: 20px 50px 1fr 50px;
    border-radius: 10px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.2s;
  }

  .card:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.1);
  }

  .card__link,
  .card__exit,
  .card__icon {
    position: relative;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    font-size:20px;
  }

  .text {
    color: white;
  }

  .card__exit {
    grid-row: 1/2;
    justify-self: end;
  }

  .card__icon {
    grid-row: 2/3;
    font-size: 30px;
  }

  .card__apply {
    grid-row: 4/5;
    align-self: center;
  }

  .card-5 {
    background: radial-gradient(#f588d8, #c0a3e5);
  }

  @media (max-width: 960px) {
    .cards-container {
      grid-template-columns: repeat(2, 1fr);
      
    }
  }

  @media (max-width: 640px) {
    .cards-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Card;