import { Card, Col, Form, Input, Button } from "antd";
import { Typography } from "../theme/AppTypography";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { loginSchema } from "../schema/Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Google } from "../utils/Icon";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: object) => {
    console.log("data", data);
  };
  return (
    <>
      <Wrapper>
        <Col offset={8} lg={8}>
          <Card>
            <div className="summary-container">
              <Typography variant="h2Bold">Welcome back</Typography>
              <Typography variant="h5Regular">
                Enter your credentials to access your account
              </Typography>
            </div>
            <Form
              layout="vertical"
              className="form"
              onFinish={handleSubmit(onSubmit)}
            >
              <Form.Item
                label={"Email Address"}
                className="custom-label"
                validateStatus={errors.email ? "error" : ""}
                help={errors.email?.message}
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder={"name@company.com"} />
                  )}
                />
              </Form.Item>
              <Form.Item
                label={"Password"}
                className="custom-label"
                validateStatus={errors.password ? "error" : ""}
                help={errors.password?.message}
              >
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input.Password {...field} placeholder={"Enter Pasword"} />
                  )}
                />
              </Form.Item>
              <p className="forgot-text">{"forgot password?"}</p>
              <Button
                color="blue"
                variant="solid"
                size="middle"
                className="btn"
                htmlType="submit"
              >
                Login to Dashboard
              </Button>
              <div className="line-parent">
                <div className="line" /> or continue with{" "}
                <div className="line" />
              </div>
              <Button className="google-btn">
                <Google />
                {"login with google"}
              </Button>
              <p>Don't have an account ?Create Account</p>
            </Form>
          </Card>
        </Col>
      </Wrapper>
    </>
  );
};

export default LoginForm;

const Wrapper = styled.div`
  display: flex;
  .ant-card-body {
    display: flex;
    flex-direction: column;
    align-items: start;
    // justify-content:start;
    gap: 10px;
  }
  .summary-container {
    text-align: center;
    width: 100%;
    margin-bottom: 3%;
  }
  .form {
    width: 100%;
  }
  .forgot-text {
    text-align: end;
  }
  .google-btn {
    width: 100%;
  }
  .btn {
    width: 100%;
  }
  .line-parent {
    margin: 12px 0px;
    display: flex;
    gap: 6px;
    color:${props=>props.theme.subtitle};
    justify-content: center;
    align-items: center;
  }
  .line {
    border: 1px solid ${props=>props.theme.subtitle}; 
    width: 18%;
    height: 0px;
  }
  p {
    text-align: center;
  }
`;
