import styled from "styled-components";

// Styled Components approach: a styled <header> aware of the theme
const Hero = styled.header`
  background: linear-gradient(
    135deg,
    ${(props) => (props.dark ? "#1f2430" : "#3b1892")},
    ${(props) => (props.dark ? "#232a3a" : "#6d28d9")}
  );
  color: #fff;
  padding: 3.5rem 0;
  text-align: center;

  h1 {
    font-size: 2.75rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.15rem;
    opacity: 0.9;
    margin: 0;
  }
`;

export default Hero;