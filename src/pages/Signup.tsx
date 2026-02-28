import { Col, Row } from "antd";
import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import SignUpForm from "../components/SignUpForm";

const Signup = () => {
  return (
    <LoginWrapper>
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <Typography variant="h4Semibold" className="typo-1">
            AI Resume Analyser
          </Typography>
        </Col>
        <Col>
          <Typography variant="h5Regular" className="typo-2">
            Optimize your carrer path
          </Typography>
        </Col>
      </Row>
      <SignUpForm />
      <Col className="footer-text">@ 2026 RESUME ANALYZER SECURE LOGIN.</Col>
    </LoginWrapper>
  );
};

export default Signup;

const LoginWrapper = styled.div`
  background: ${(p) => p.theme.atsBackground};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  .typo-1 {
    color: ${(props) => props.theme.subtitle};
    padding-left: 10px;
  }
  .typo-2 {
    color: ${(props) => props.theme.subtitle};
    padding-right: 10px;
  }
  .footer-text {
    color: ${(props) => props.theme.subtitle};
    text-align: center;
  }
`;
