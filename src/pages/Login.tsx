import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivEstilizada = styled.div`
  background-color: #d3d3d3;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <DivEstilizada>
        <h1 style={{borderBottom: "2px solid #000" }}>Login</h1>
      </DivEstilizada>
    </Container>
  );
}

export default App;
