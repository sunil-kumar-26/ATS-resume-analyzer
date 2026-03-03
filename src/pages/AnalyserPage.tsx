import { Col, Row } from "antd";
import styled from "styled-components";
import { AnalyseApplication } from "./AnalyseApplication";
import StatsPage from "./StatsPage";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { TiltWrapper } from "../theme/AnimationWrapper";

const AnalyserPage = () => {
  const { ref: ref1, isVisible: isVisible1 } =
    useScrollAnimation<HTMLDivElement>();
  return (
    <TiltWrapper>
      <AnalyseWrapper>
        <Row
          gutter={[24, 24]}
          justify={"space-around"}
          align={"top"}
          wrap={true}
          ref={ref1}
          className={`${isVisible1 ? "tilt-in-left-1" : ""}`}
        >
          <Col lg={10}>
            <AnalyseApplication />
          </Col>
          <Col lg={13}>
            <StatsPage />
          </Col>
        </Row>
      </AnalyseWrapper>
    </TiltWrapper>
  );
};

export default AnalyserPage;
const AnalyseWrapper = styled.div`
  // background: red;
`;
