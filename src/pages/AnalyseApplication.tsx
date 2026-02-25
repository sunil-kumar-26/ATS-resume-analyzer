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
          <Typography variant="h2Bold">Analyze Application</Typography>
          <Typography variant="h4Regular">
            Optimize your resume for specific job roles in seconds
          </Typography>
        </HeaderSection>

        <FormSection>
          <Typography variant="h5Regular" className={'resume-text'}>Resume (PDF or DOCX)</Typography>

          <StyledDragger>
            <p className="upload-icon">
              <InboxOutlined />
            </p>
            <p className="upload-text">Click to upload or drag and drop</p>
            <p className="upload-hint">Maximum file size 5MB</p>
          </StyledDragger>

          <Typography variant="h5Regular">Target Job Description</Typography>

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
  min-height: 100vh;
//   background: linear-gradient(135deg, #0f172a, #0b1120);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
`;

const CardContainer = styled.div`
  width: 520px;
  background: #111827;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

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
  .resume-text{
  color:${props=>props.theme.body} ;
  }
`;

const StyledDragger = styled(Dragger)`
  background: #1f2937 !important;
  border: 1px dashed #374151 !important;
  border-radius: 12px !important;
  padding: 24px 16px;

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
  background: #1f2937 !important;
  border: 1px solid #374151 !important;
  border-radius: 12px !important;
  color: #ffffff !important;

  &::placeholder {
    color: #6b7280;
  }
`;

const StyledButton = styled(Button)`
  height: 48px;
  border-radius: 12px;
  font-weight: 600;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;
