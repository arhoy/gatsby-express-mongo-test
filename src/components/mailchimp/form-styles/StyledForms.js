import styled from '@emotion/styled';
import { ButtonStyle2 } from '../../reusableStyles/buttons/Button';
import { H2, P } from '../../reusableStyles/typography/Typography';

const StyledForm1 = styled.form`
  position: fixed;
  transform: translate(-50%, -50%);
  padding: 3rem;
  width: 60rem;
  height: 30rem;
  margin: auto;
  top: 50%;
  left: 50%;
  z-index: 12;
  display: block;
  background: ${props => props.theme.colors.lightgrey};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 90%;
    margin: 0 auto;
    height: auto;
  }
`;

const StyledForm2 = styled(StyledForm1)`
  background: linear-gradient(#4e54c8, #8f94fb);
`;

const Button1 = styled(ButtonStyle2)`
  border-radius: 3px;
  padding: 1rem;
`;

const StyledH2 = styled(H2)`
  text-align: center;
  line-height: 3rem;
  color: ${props => props.theme.colors.white};
`;

const Blurb = styled(P)`
  width: 75%;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`;

const SubContainer = styled.div`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export { StyledForm1, StyledForm2, Button1, StyledH2, Blurb, SubContainer };
