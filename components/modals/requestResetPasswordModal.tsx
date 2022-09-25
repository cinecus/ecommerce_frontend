import React from "react";
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
import { useRequestResetPassword, useSignIn } from "../../hooks";

const RequestResetPasswordModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();
  const dispatch = useAppDispatch();
  const { mutate, isLoading, isError, error, isSuccess } =
    useRequestResetPassword();
  const { isRequestResetPasswordShow } = useAppSelector((state) => state.modal);
  const handleRequest: SubmitHandler<{ email: string }> = (data) => {
    mutate(data);
  };
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={isRequestResetPasswordShow}
      onClose={() =>
        dispatch(
          toggleModal({ key: "isRequestResetPasswordShow", status: "close" })
        )
      }
      blur
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          รายการคำขอตั้งค่ารหัสผ่านใหม่
        </Text>
      </Modal.Header>
      <Modal.Body onSubmit={handleSubmit(handleRequest)} as="form">
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
        <Button auto type="submit" as="button" disabled={isSuccess}>
          {isLoading? (
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
            ตรวจสอบอีเมลของท่านเพื่อตั้งค่ารหัสผ่านใหม่
          </Text>
        ) : null}
      </Modal.Body>
    </Modal>
  );
};

export default RequestResetPasswordModal;

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
