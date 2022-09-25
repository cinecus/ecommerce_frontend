import React, { useRef ,FC} from "react";
import {
  Modal,
  Text,
  Input,
  Row,
  Button,
  Container,
  Loading,
} from "@nextui-org/react";
import { toggleModal } from "../../store/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRequestResetPassword, useResetPassword, useSignIn } from "../../hooks";

const ResetPasswordModal:FC<{token:string}> = ({token}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<{ password: string; repassword: string }>();
  const password = useRef({});
  password.current = watch("password", "");

  const dispatch = useAppDispatch();

  const { mutate, isLoading, isError, error, isSuccess } = useResetPassword();
  const { isResetPasswordShow } = useAppSelector((state) => state.modal);
  const handleRequest: SubmitHandler<{ password: string }> = (data) => {
    mutate({
      password:data.password,
      token:token
    });
  };
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={isResetPasswordShow}
      onClose={() =>
        dispatch(toggleModal({ key: "isResetPasswordShow", status: "close" }))
      }
      blur
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          รายการคำขอตั้งค่ารหัสผ่านใหม่
        </Text>
      </Modal.Header>
      <Modal.Body onSubmit={handleSubmit(handleRequest)} as="form">
        <Text>รหัสผ่าน :</Text>
        <Input
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
            minLength: {
              value: 6,
              message: "รหัสผ่าน อย่างน้อย 6 ตัวอักษร",
            },
          })}
        />
        <Text color="error">{errors.password?.message}</Text>
        <Text>ยืนยันรหัสผ่าน :</Text>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          type="password"
          placeholder="Re-Password"
          contentLeft={<Password fill="currentColor" />}
          {...register("repassword", {
            validate: (value) =>
              value === password.current || "กรุณากรอก รหัสผ่าน ให้ตรงกัน",
          })}
        />
        <Text color="error">{errors.repassword?.message}</Text>

        <Button auto type="submit" as="button" disabled={isSuccess}>
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
              <Text size={16}>ส่งคำขอ</Text>
            </Row>
          )}
        </Button>
        {isError ? <Text color="error">{error.message}</Text> : null}
        {isSuccess ? (
          <Text color="success">
            ตั้งค่ารหัสผ่านใหม่สำเร็จแล้ว
          </Text>
        ) : null}
      </Modal.Body>
    </Modal>
  );
};

export default ResetPasswordModal;

const Password = ({
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
