import { Button, Card, Col, Row, Statistic } from "antd";
import styled from "styled-components";
import { Typography } from "../theme/AppTypography";
import { FilePdfOutlined } from "@ant-design/icons";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { TiltWrapper } from "../theme/AnimationWrapper";
import { DashboardTable } from "../components/DashboardTable";

const DashboardPage = () => {
  const { ref: ref1, isVisible: isVisible1 } =
    useScrollAnimation<HTMLDivElement>();
  return (
    <DashboardWrapper>
      <TiltWrapper>
        <Row
          gutter={[24, 24]}
          ref={ref1}
          className={`${isVisible1 ? "tilt-in-left-1" : ""}`}
        >
          <Col lg={24} xs={24} className="col-1">
            <div className="heading-parent-container">
              <Typography variant="h2Bold" className="welcome-text">
                Welcome back, Sunil
              </Typography>
              <Typography variant="h5Regular" className="welcome-summary">
                Reviewing your team's hiring metrics for today.
              </Typography>
            </div>
            <Button
              variant="solid"
              size="large"
              className="analyze-btn"
              color="primary"
            >
              <FilePdfOutlined />
              Analyze New Resume
            </Button>
          </Col>
          <Col lg={24} xs={24} className="card-container">
            <Col  lg={7} xs={24} className="col-2">
              <div className="card-header">
                <span className="icon-container-1">
                  <MdOutlineDocumentScanner color="#3582F6" size={24} />
                </span>
                <span className="analyse-conatiner">
                  <AiOutlineRise />
                  +12.15%
                </span>
              </div>
              <div className="card-body">
                <h4>Total Analyses</h4>
                <Statistic
                  className="statistic-container"
                  value={112893}
                  valueStyle={{ color: "#F6F9F6" }}
                />
              </div>
            </Col>
            <Col  lg={8} xs={24} className="col-2">
              <div className="card-header">
                <span className="icon-container-2">
                  <MdOutlineVerified color="green" size={24} />
                </span>
                <span className="analyse-conatiner">
                  <AiOutlineRise />
                  +12.15%
                </span>
              </div>
              <div className="card-body">
                <h4>Average ATS Score</h4>
                <Statistic
                  value={11.4}
                  suffix="%"
                  className="statistic-container"
                  valueStyle={{ color: "#F6F9F6" }}
                />
              </div>
            </Col>
            <Col  lg={8} xs={24} className="col-2">
              <div className="card-header">
                <span className="icon-container-3">
                  <MdOutlineStarOutline size={24} color="#F59E0B" />
                </span>
                <span className="analyse-conatiner">
                  <AiOutlineRise />
                  +12.15%
                </span>
              </div>
              <div className="card-body">
                <h4>Highest Score</h4>
                <Statistic
                  className="statistic-container"
                  value={13}
                  suffix="%"
                  valueStyle={{ color: "#F6F9F6" }} 
                />
              </div>
            </Col>
          </Col>
          <Col  xs={24} lg={24} className=""  >
          <DashboardTable/>
          </Col>
        </Row>
      </TiltWrapper>
    </DashboardWrapper>
  );
};

export default DashboardPage;

const DashboardWrapper = styled.div`
  h4 {
    color: #94a3b8;
  }
  .col-1 {
    display: flex;
    padding: 12px;
    gap: 18px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .col-2 {
    color: white;
    background: #161f2c;
    border-radius: 8px;
    border: 1px solid #1e293b;
    padding: 18px;
    transition: box-shadow 0.4s;
    cursor: pointer;
  }

  .col-2:hover {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  }
  .analyze-btn {
    font-weight: 600;
    align-self: end;
  }
  .welcome-text {
    color: ${(p) => p.theme.body};
  }
  .welcome-summary {
    color: #94a3b8;
  }
  .icon-container-1 {
    background: #182840;
    padding: 12px;
    border-radius: 6px;
  }
  .icon-container-2 {
    background: #142e34;
    padding: 12px;
    border-radius: 6px;
  }
  .icon-container-3 {
    background: #2b2b28;
    padding: 12px;
    border-radius: 6px;
  }
  .card-header {
    display: flex;
    // flex-wrap: wrap;
    justify-content: space-between;
    gap: 48px;
    align-items: center;
  }
  .analyse-conatiner {
    display: flex;
    font-weight: 600;
    flex-wrap: wrap;

    justify-content: space-between;
    align-items: center;
    color: #10b981;
  }
  .card-body {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .heading-parent-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .statistic-container {
    font-weight: 800;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;


