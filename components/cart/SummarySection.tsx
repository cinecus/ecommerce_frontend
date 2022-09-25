import React from "react";
import { Container, Card, Text, Row, Col, Button } from "@nextui-org/react";
import { useAppSelector } from "../../store/store";
import { cartItemType } from "../../types";
import { numberFormat } from "../../function";

const SummarySection = () => {
  const { carts } = useAppSelector((state) => state.cart);
  return (
    <Container fluid>
      <Card>
        <Card.Header>
          <Text b>สรุปรายการคำสั่งซื้อ</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Row justify="space-between">
            <Col span={4}>
              <Text size={16}>จำนวน</Text>
            </Col>
            <Col span={5}>
              <Text size={16}>รายการ</Text>
            </Col>
            <Col span={3}>
              <Text size={16}>ราคารวม</Text>
            </Col>
          </Row>
          {carts.map((cartItem: cartItemType) => {
            return (
              <Row justify="space-between">
                <Col span={4}>
                  <Text size={16} css={{ color: "$accents8" }}>
                    {cartItem.qty}
                  </Text>
                </Col>
                <Col span={5}>
                  <Text size={16} css={{ color: "$accents8" }}>
                    {cartItem.product?.name}
                  </Text>
                </Col>
                <Col span={3}>
                  <Text size={16} css={{ color: "$accents8" }}>
                    {numberFormat(cartItem.qty * cartItem.product?.price!)}
                  </Text>
                </Col>
              </Row>
            );
          })}

          <Card.Divider />
          <Row css={{ py: "$5", gap: "$3", alignItems: "center" }}>
            <Text size={16} b>
              ยอดทั้งหมด :
            </Text>
            <Text size={16} css={{ color: "$accents8" }}>
              {numberFormat(
                carts.reduce(
                  (prev: number, cur: cartItemType) =>
                    prev + cur.qty * cur.product?.price!,
                  0
                )
              )}{" "}
              บาท
            </Text>
          </Row>
          <Row css={{ gap: "$3", alignItems: "center" }}>
            <Text size={16} b>
              ส่วนลด :
            </Text>
            <Text size={16} css={{ color: "$accents8" }}>
              00.00 บาท
            </Text>
          </Row>
          <Card.Divider />
          <Row css={{ py: "$5", gap: "$3", alignItems: "center" }}>
            <Text size={16} b>
              ยอดที่ต้องชำระ :
            </Text>
            <Text size={16} css={{ color: "$accents8" }}>
              {numberFormat(
                carts.reduce(
                  (prev: number, cur: cartItemType) =>
                    prev + cur.qty * cur.product?.price!,
                  0
                )
              )}{" "}
              บาท
            </Text>
          </Row>
          <Card.Divider />
        </Card.Body>
      </Card>
      <Button css={{ w: "100%", mt: "$4" }}>ยืนยันคำสั่งซื้อ</Button>
    </Container>
  );
};

export default SummarySection;
