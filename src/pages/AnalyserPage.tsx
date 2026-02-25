import { Col, Row } from "antd";
import styled from "styled-components";
import { AnalyseApplication } from "./AnalyseApplication";

const AnalyserPage = () => {
  return (
    <AnalyseWrapper>
      <Row justify={"space-around"} align={"middle"} wrap={true}>
        <Col lg={10}>
          <AnalyseApplication />
        </Col>
        <Col lg={10}>
          <AnalyseApplication />
        </Col>
      </Row>
    </AnalyseWrapper>
  );
};

export default AnalyserPage;
const AnalyseWrapper = styled.div``;
