import { Container, Grid, Text, Collapse } from "@nextui-org/react";
import React from "react";

const FeaturePage = () => {
  return (
    <Container css={{ mt: "$15", "@xl": { px: "12%" } }}>
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Text h1 >
            คำอธิบายฟีเจอร์
          </Text>
          <Collapse.Group>
            <Collapse title="สมัครสมาชิก และ เข้าสู่ระบบ" >
              <Text css={{ color: "$accents6" }}>
                ผู้ใช้งาน สามารถสมัครสมาชิกและเข้าสู่ระบบได้ 4วิธี ดังนี้
              </Text>
              <Text css={{ color: "$accents6" }}>
                1) สมัครสมาชิกกับตัวระบบเอง
              </Text>
              <Text css={{ color: "$accents6" }}>
                2) สมัครสมาชิกด้วยบัญชี google
              </Text>
              <Text css={{ color: "$accents6" }}>
                3) สมัครสมาชิกด้วยบัญชี facebook
              </Text>
              <Text css={{ color: "$accents6" }}>
                4) สมัครสมาชิกด้วย github
              </Text>
            </Collapse>
            <Collapse title="ดูสินค้า">
              <Text  css={{ color: "$accents6" }}>
                ผู้ใช้งานสามารถดูสินค้า และ ใช้งานตัวกรองสินค้าได้ โดยตัวกรองมี 2 แบบ คือ กรองจาก Tag และ กรองจากราคา
              </Text>
              <Text  css={{ color: "$accents6" }}>
                และ ผู้ใช้ยังสามารถเรียงสินค้าได้โดยเรียงตามตัวอักษร หรือ เรียงตามวันที่สินค้าเปิดขาย หรือ ราคา
              </Text>
            </Collapse>
            <Collapse title="ตะกร้าสินค้า">
              <Text  css={{ color: "$accents6" }}>
                ผู้ใช้สามารถเพิ่มสินค้าลงตะกร้าได้ และจากหน้าตะกร้าสามารถลดจำนวน หรือ ลบสินค้าที่ไม่ต้องการออกจากตะกร้าได้
              </Text>
            </Collapse>
            <Collapse title="ยืนยันออเดอร์ (อยู่ในช่วงพัฒนา)">
              <Text  css={{ color: "$accents6" }}>
                ผู้ใช้สามารถยืนยันออเดอร์ได้จากหน้าตะกร้าสินค้า
              </Text>
            </Collapse>
          </Collapse.Group>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default FeaturePage;
