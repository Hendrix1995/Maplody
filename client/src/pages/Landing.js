import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';

const LandingContainer = styled.div`
  margin: 40px;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('');
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 620px;
`;

const MapContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.img`
  height: 430px;
`;

const About = styled.div`
  margin: 15px;
  padding: 20px;
  border: none;
  border-radius: 15px;
  box-shadow: 2px 2px 4px 4px gray;
  margin-bottom: 30px;
  background-color: white;
`;

const LandingMap = styled.img`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-items: center;
  opacity: 80%;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <AboutContainer>
        <Logo src={require('../img/Maplody_Logo.png').default} />
        <About>
          <p>"기억하고 싶은 순간의 들리던 음악을 소중한 추억으로 간직하세요"</p>
          <br />
          <p>누구나 한 순간 기억하고 싶은 때가 있습니다.</p>
          <p>그 순간을 함께한 소중한 인연과</p>
          <p>그때 들려오던 음악을 저장하고 추억을 언제나 꺼내 보세요.</p>
          <br />
          <p>언젠가 그때 그 노래가 들려오면...</p>
          <p>다시 그곳에 방문하면...</p>
          <br />
          당신을 다시 그곳으로 돌려 놓을
          <p>"Maplody 하세요"</p>
        </About>
        <Button text="시작하기" />
      </AboutContainer>
      <MapContainer>
        <LandingMap src={require('../img/서울.jpeg').default} />
      </MapContainer>
    </LandingContainer>
  );
};
export default Landing;
