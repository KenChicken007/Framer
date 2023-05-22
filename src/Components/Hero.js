import React from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131313;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  color: #fff;
  background: transparent;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 150px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 250px;
    left: 100px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 200px;
  }
  ${Image}:nth-child(4) {
    top: 450px;
    left: 300px;
  }
`;
const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const imgShift = {
    scale: { scale: 0.9 },
  };
  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Welcome to Search
            </motion.h1>
            <motion.p variants={fadeLeft} initial="hidden" animate="visible">
              Journey to the unkown
            </motion.p>
            <Button
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "#67F6E7",
                border: "none",
                color: "#000",
              }}
              variants={fadeLeft}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              Get Started
            </Button>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={require("../Images/planet.svg").default}
              alt="Planet-1"
              variants={imgShift}
              whileTap="scale"
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
            <Image
              src={require("../Images/planet-2.svg").default}
              alt="2"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={require("../Images/planet-3.svg").default}
              alt="3"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={require("../Images/planet-4.svg").default}
              alt="4"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
          </ColumnRight>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
