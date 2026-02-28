import { Card, Col, Form, Input, Button } from "antd";
import { Typography } from "../theme/AppTypography";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { signupSchema } from "../schema/Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Google } from "../utils/Icon";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Checkbox } from "antd";
import { useState } from "react";

type SignupFormType = {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    resolver: yupResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignupFormType) => {
    try {
      setLoading(true);
      console.log("data", data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Col offset={8} lg={8}>
          <Card>
            <div className="summary-container">
              <Typography variant="h2Bold">ATS resume analyzer</Typography>
              <Typography variant="h5Regular">
                Enter your credentials to access new world
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
              <Form.Item
                label={"Confirm Password"}
                className="custom-label"
                validateStatus={errors.confirmPassword ? "error" : ""}
                help={errors.confirmPassword?.message}
              >
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      placeholder={"Confirm your Password"}
                    />
                  )}
                />
              </Form.Item>
              <Form.Item
                validateStatus={errors.terms ? "error" : ""}
                help={errors.terms?.message}
              >
                <Controller
                  name="terms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    >
                      {" "}
                      I agree to Terms
                    </Checkbox>
                  )}
                />
              </Form.Item>

              <Button
                color="blue"
                variant="solid"
                size="middle"
                className="btn"
                htmlType="submit"
                loading={loading}
              >
                Sign Up for free analyzer <IoIosArrowRoundForward size={30} />
              </Button>
              <div className="line-parent">
                <div className="line" /> or continue with{" "}
                <div className="line" />
              </div>
              <Button className="google-btn" disabled={loading}>
                <Google />
                {"Sign up with google"}
              </Button>
              <Button className="google-btn" disabled={loading}>
                {"already have an account- login"}
              </Button>
            </Form>
          </Card>
        </Col>
        <div>
          <div>1 child </div>
          <div></div>
          <div></div>
        </div>
      </Wrapper>
    </>
  );
};

export default SignUpForm;

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
    color: ${(props) => props.theme.subtitle};
    justify-content: center;
    align-items: center;
  }
  .line {
    border: 1px solid ${(props) => props.theme.subtitle};
    width: 18%;
    height: 0px;
  }
  p {
    text-align: center;
  }
`;
