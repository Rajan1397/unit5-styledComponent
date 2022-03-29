import styled from "styled-components";

const Button = styled.button`
  width: 300px;
  height: 60px;
  background-color: ${({ theme }) => (theme === "primary" ? "blue" : "white")};
  margin: 30px;
  color: ${({ theme }) => (theme === "link" ? "blue" : "black")};
  border-radius: 5px;
  border: ${({ theme }) => (theme === "text" ? "0px" : "1px")}
    ${({ theme }) => (theme === "dashed" ? "dashed" : "solid")} black;
`;

// const Button = ({ children }) => {
//   return <button className="btn">{children}</button>;
// };
export { Button };
