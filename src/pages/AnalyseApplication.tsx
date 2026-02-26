import { Upload, Input, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Typography } from "../theme/AppTypography";

const { Dragger } = Upload;
const { TextArea } = Input;

export const AnalyseApplication = () => {
  return (
    <PageWrapper>
      <CardContainer>
        <HeaderSection>
          <Typography variant="h4Semibold" className={"typo1"}>
            Analyze Application
          </Typography>
          <Typography variant="h4Regular">
            Optimize your resume for specific job roles in seconds
          </Typography>
        </HeaderSection>

        <FormSection>
          <Typography variant="h5Regular" className={"resume-text"}>
            Resume (PDF or DOCX)
          </Typography>

          <StyledDragger>
            <p className="upload-icon">
              <InboxOutlined />
            </p>
            <p className="upload-text">Click to upload or drag and drop</p>
            <p className="upload-hint">Maximum file size 5MB</p>
          </StyledDragger>

          <Typography variant="h5Regular" className={"resume-text"}>
            Target Job Description
          </Typography>

          <StyledTextArea
            placeholder="Paste the full job description here to see how you match..."
            rows={6}
          />

          <StyledButton type="primary">Analyze Match →</StyledButton>
        </FormSection>
      </CardContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  // padding: 20px 20px;
`;

const CardContainer = styled.div`
  width: 100%;
  background: #141F2B;
  padding: 32px;
  border-radius: 16px;
  // box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .typo1 {
    color: ${(p) => p.theme.body};
  }

  h2 {
    color: #ffffff;
  }

  h4 {
    color: #9ca3af;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .resume-text {
    color: ${(props) => props.theme.subtitle};
  }
`;

const StyledDragger = styled(Dragger)`
  background: #1F2831 !important;
  border: 1px dashed #374151 !important;
  border-radius: 12px !important;
  padding: 24px 16px;
  width: 100%;
  .upload-icon {
    font-size: 32px;
    color: #3b82f6;
  }

  .upload-text {
    color: #e5e7eb;
    font-weight: 500;
  }

  .upload-hint {
    color: #9ca3af;
    font-size: 12px;
  }
`;

const StyledTextArea = styled(TextArea)`
  background: #1F2831 !important;
  border: 1px solid #374151 !important;
  border-radius: 12px !important;
  color: #ffffff !important;
  width: 100%;
  &::placeholder {
    color: #6b7280;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 12px;
  font-weight: 600;
  width: 100%;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;
