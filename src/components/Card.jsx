import React from "react";
import styled from "styled-components";
import CardButton from "./CardButton";

const Card = ({ title, subtitle }) => {
  return (
    <StyledWrapper>
      <div className="container noselect ">
        <div className="canvas">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`tracker tr-${i + 1}`} />
          ))}
          <div id="card">
            <p id="prompt">{title}</p>
            <div className="title">{subtitle}</div>
          </div>
        </div>
      </div>

      <CardButton />
    </StyledWrapper>
  );
};

const CardGrid = () => {
  const cards = [
    {
      title: "Web Development",
      subtitle:
        "We offer professional web development services to help you build a strong online presence.",
    },
    {
      title: "Graphic Design",
      subtitle:
        "Our graphic design services will help you create stunning visuals for your brand.",
    },
    {
      title: "SEO Optimization",
      subtitle:
        "Improve your websites visibility on search engines with our SEO optimization services.",
    },
    {
      title: "Logo Design",
      subtitle:
        "We provide creative logo design services to help you establish a unique brand identity.",
    },
    {
      title: "UI/UX Design",
      subtitle:
        "Our UI/UX design services ensure that your website is user-friendly and visually appealing.",
    },
    {
      title: "Content Writing",
      subtitle:
        "Our content writing services will help you create engaging and informative content for your audience.",
    },
  ];

  return (
    <StyledGrid>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} subtitle={card.subtitle} />
      ))}
    </StyledGrid>
  );
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 20px;
  margin-left: 200px;
`;

const StyledWrapper = styled.div`
  /* Original styling remains unchanged */
  .container {
    position: relative;
    width: 190px;
    height: 254px;
    transition: 200ms;
  }

  .container:active {
    width: 180px;
    height: 245px;
  }

  #card {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: 700ms;
    background: linear-gradient(
      43deg,
      rgb(65, 88, 208) 0%,
      rgb(200, 80, 192) 46%,
      rgb(255, 204, 112) 100%
    );
  }

  .subtitle {
    transform: translateY(160px);
    color: rgb(134, 110, 221);
    text-align: center;
    width: 100%;
  }

  .title {
    opacity: 0;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out-out;
    transition-delay: 100ms;
    position: absolute;
    font-size: large;
    font-weight: bold;
    color: white;
  }

  .tracker:hover ~ #card .title {
    opacity: 1;
  }

  #prompt {
    bottom: 8px;
    left: 12px;
    z-index: 20;
    font-size: 20px;
    font-weight: bold;
    transition: 300ms ease-in-out-out;
    position: absolute;
    max-width: 110px;
    color: rgb(255, 255, 255);
  }

  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }

  .container:hover #card::before {
    transition: 200ms;
    content: "";
    opacity: 80%;
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
  }

  #card::before {
    content: "";
    background: linear-gradient(
      43deg,
      rgb(65, 88, 208) 0%,
      rgb(200, 80, 192) 46%,
      rgb(255, 204, 112) 100%
    );
    filter: blur(2rem);
    opacity: 30%;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    transition: 200ms;
  }

  .tracker:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export default CardGrid;
