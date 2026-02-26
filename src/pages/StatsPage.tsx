import { Row, Col, Card, Progress } from "antd";
import {
  CheckCircleOutlined,
  WarningOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const StatsPage = () => {
  return (
    <StatsWrapper>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <StyledCard>
            <div className="ats-container">
              <Progress
                type="circle"
                percent={100}
                strokeWidth={8} 
                status="active"
                className="progress-bar"
                strokeColor="#22c55e"
                railColor="#1f2937"
              />
              <h3>Strong match for Senior Frontend Engineer</h3>
            </div>
          </StyledCard>
        </Col>

        <Col xs={24} lg={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <SmallCard>
                <CheckCircleOutlined className="icon green" />
                <div>
                  <p className="label">Matched Skills</p>
                  <h3>12 / 16</h3>
                </div>
              </SmallCard>
            </Col>

            <Col xs={24}>
              <SmallCard>
                <WarningOutlined className="icon yellow" />
                <div>
                  <p className="label">Missing Keywords</p>
                  <h3>4 Missing</h3>
                </div>
              </SmallCard>
            </Col>

            <Col xs={24}>
              <SmallCard>
                <BulbOutlined className="icon blue" />
                <div>
                  <p className="label">Improvements</p>
                  <h3>3 High Impact</h3>
                </div>
              </SmallCard>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: "24px" }}>
        <Col span={24}>
          <StyledCard>
            <div className="skills-header">
              <h3>Skills Analysis</h3>
              <span className="updated">Last updated 2m ago</span>
            </div>

            <div className="section">
              <p className="section-title green-text">CORE STRENGTHS</p>
              <div className="tags">
                {[
                  "React.js",
                  "TypeScript",
                  "Project Management",
                  "Agile Methodology",
                  "UI/UX Design",
                  "Next.js",
                ].map((item) => (
                  <TagGreen key={item}>{item}</TagGreen>
                ))}
              </div>
            </div>

            <div className="section">
              <p className="section-title yellow-text">CRITICAL GAPS</p>
              <div className="tags">
                {["AWS Lambda", "Docker", "Unit Testing", "GraphQL"].map(
                  (item) => (
                    <TagYellow key={item}>{item}</TagYellow>
                  ),
                )}
              </div>
            </div>
          </StyledCard>
        </Col>
      </Row>
    </StatsWrapper>
  );
};

export default StatsPage;

const StatsWrapper = styled.div`
  width: 100%;
`;

const StyledCard = styled(Card)`
  background: #141f2b;
  border-radius: 16px;
  border: 1px solid #1f2937;
  color: white;

  .ant-card-body {
    padding: 24px;
  }

  .ats-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
  }

  h3 {
    color: #e5e7eb;
    font-weight: 500;
  }

  .skills-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .updated {
    font-size: 12px;
    color: #6b7280;
  }

  .section {
    margin-top: 16px;
  }

  .section-title {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .green-text {
    color: #22c55e;
  }

  .yellow-text {
    color: #f59e0b;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .ant-progress-indicator {
    color: #22c55e;
    font-weight:900;
  }
`;

const SmallCard = styled(Card)`
  background: #1f2831;
  border-radius: 12px;
  border: 1px solid #1f2937;
  color: white;

  .ant-card-body {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px;
  }

  .icon {
    font-size: 22px;
  }

  .green {
    color: #22c55e;
  }

  .yellow {
    color: #f59e0b;
  }

  .blue {
    color: #3b82f6;
  }

  .label {
    font-size: 13px;
    color: #9ca3af;
    margin: 0;
  }

  h3 {
    margin: 0;
    font-weight: 600;
  }
`;

const TagGreen = styled.span`
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
`;

const TagYellow = styled.span`
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
`;
