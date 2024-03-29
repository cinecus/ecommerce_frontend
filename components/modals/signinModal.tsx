import React, { FC } from "react";
import {
  Modal,
  Text,
  Input,
  Row,
  Button,
  Container,
  Loading,
} from "@nextui-org/react";
import { FaFacebook, FaGithub, FaGoogle, FaLine, FaSignInAlt } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignIn } from "../../hooks";
import { signinBodyType } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toggleModal } from "../../store/slices/modalSlice";

const SignInModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinBodyType>();
  const dispatch = useAppDispatch();
  const { mutate, isLoading, isError, error } = useSignIn();
  const { isSigninShow } = useAppSelector((state) => state.modal);
  const handleSignIn: SubmitHandler<signinBodyType> = (data) => {
    mutate(data);
  };
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={isSigninShow}
      onClose={() =>
        dispatch(toggleModal({ key: "isSigninShow", status: "close" }))
      }
      blur
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome to{" "}
          <Text b size={18}>
            CC Store
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body onSubmit={handleSubmit(handleSignIn)} as="form">
        <Input
          aria-label="email"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          contentLeft={<Mail fill="currentColor" />}
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email is in wrong format.",
            },
            required: "กรุณา อีเมล !",
          })}
        />
        <Text color="error">{errors.email?.message}</Text>
        <Input
          aria-label="password"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          type="password"
          contentLeft={<Password fill="currentColor" />}
          {...register("password", {
            required: "กรุณา รหัสผ่าน !",
          })}
        />
        <Text color="error">{errors.password?.message}</Text>
        <Row justify="flex-end">
          <Text
            size={14}
            onClick={() => {
              dispatch(toggleModal({ key: "isSigninShow", status: "close" }));
              dispatch(
                toggleModal({
                  key: "isRequestResetPasswordShow",
                  status: "open",
                })
              );
            }}
            as="a"
          >
            Forgot password?
          </Text>
        </Row>
        <Button auto type="submit" as="button">
          {isLoading ? (
            <Loading color={"secondary"} gradientBackground={null} />
          ) : (
            <Row
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "$5",
              }}
            >
              <FaSignInAlt size={18} color="white" />
              <Text size={16}>เข้าสู่ระบบ</Text>
            </Row>
          )}
        </Button>
        {isError ? <Text color="error">{error.message}</Text> : null}
        <Row justify="center">
          <Text size={14}>- OR -</Text>
        </Row>

        <Button
          css={{ borderColor: "$white", bc: "$red600" }}
          auto
          bordered
          as="a"
          href={process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URI}
        >
          <Row
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "$5",
            }}
          >
            <FaGoogle size={16} color="white" />
            <Text size={16}>เข้าสู่ระบบด้วย google account</Text>
          </Row>
        </Button>
        <Button
          css={{ bc: "$colors$facebook", borderColor: "$white" }}
          auto
          bordered
          as="a"
          href={process.env.NEXT_PUBLIC_FACEBOOK_LOGIN_URI}
        >
          <Row
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "$5",
            }}
          >
            <FaFacebook size={16} color="white" />
            <Text size={16}>เข้าสู่ระบบด้วย facebook account</Text>
          </Row>
        </Button>
        <Button
          css={{ bc: "$black", borderColor: "$white" }}
          auto
          bordered
          as="a"
          href={process.env.NEXT_PUBLIC_GITHUB_LOGIN_URI}
        >
          <Row
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "$5",
            }}
          >
            <FaGithub size={16} color="white" />
            <Text size={16}>เข้าสู่ระบบด้วย github account</Text>
          </Row>
        </Button>

        <Button
          css={{ bc: "#06C755", borderColor: "$white" }}
          auto
          bordered
          as="a"
          href={process.env.NEXT_PUBLIC_LINE_LOGIN_URI}
        >
          <Row
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "$5",
            }}
          >
            <FaLine size={16} color="white" />
            <Text size={16}>เข้าสู่ระบบด้วย LINE account</Text>
          </Row>
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default SignInModal;

export const Mail = ({
  fill,
  size,
  height,
  width,
  ...props
}: {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3" />
        <path d="M17 9l-3.13 2.5a3.166 3.166 0 01-3.75 0L7 9M19.21 14.77l-3.539 3.54a1.232 1.232 0 00-.3.59l-.19 1.35a.635.635 0 00.76.76l1.35-.19a1.189 1.189 0 00.59-.3l3.54-3.54a1.365 1.365 0 000-2.22 1.361 1.361 0 00-2.211.01zM18.7 15.28a3.185 3.185 0 002.22 2.22" />
      </g>
    </svg>
  );
};

export const Password = ({
  fill,
  size,
  height,
  width,
  ...props
}: {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill={fill}>
        <path d="M18.75 8v2.1a12.984 12.984 0 00-1.5-.1V8c0-3.15-.89-5.25-5.25-5.25S6.75 4.85 6.75 8v2a12.984 12.984 0 00-1.5.1V8c0-2.9.7-6.75 6.75-6.75S18.75 5.1 18.75 8z" />
        <path d="M18.75 10.1a12.984 12.984 0 00-1.5-.1H6.75a12.984 12.984 0 00-1.5.1C2.7 10.41 2 11.66 2 15v2c0 4 1 5 5 5h10c4 0 5-1 5-5v-2c0-3.34-.7-4.59-3.25-4.9zM8.71 16.71A1.052 1.052 0 018 17a1 1 0 01-.38-.08 1.032 1.032 0 01-.33-.21A1.052 1.052 0 017 16a1 1 0 01.08-.38 1.155 1.155 0 01.21-.33 1.032 1.032 0 01.33-.21 1 1 0 011.09.21 1.155 1.155 0 01.21.33A1 1 0 019 16a1.052 1.052 0 01-.29.71zm4.21-.33a1.155 1.155 0 01-.21.33A1.052 1.052 0 0112 17a1.033 1.033 0 01-.71-.29 1.155 1.155 0 01-.21-.33A1 1 0 0111 16a1.033 1.033 0 01.29-.71 1.047 1.047 0 011.42 0A1.033 1.033 0 0113 16a1 1 0 01-.08.38zm3.79.33a1.014 1.014 0 01-1.42 0 1.014 1.014 0 010-1.42 1.047 1.047 0 011.42 0c.04.05.08.1.12.16a.556.556 0 01.09.17.636.636 0 01.06.18 1.5 1.5 0 01.02.2 1.052 1.052 0 01-.29.71z" />
      </g>
    </svg>
  );
};
