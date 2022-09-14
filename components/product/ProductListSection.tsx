import React from "react";
import { Grid, Card, Badge, Text, Button } from "@nextui-org/react";

const ProductListSection = () => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {Array(10)
        .fill(0)
        .map((el, i) => (
          <Grid xs={12} sm={4} css={{ h: "360px" }} key={i}>
            <Card
              borderWeight="light"
              variant="bordered"
              css={{ $$cardColor: "$colors$primaryLight" }}
              isPressable
            >
              <Badge
                color="error"
                content={<Text>มาใหม่</Text>}
                shape="rectangle"
                placement="top-left"
                disableOutline={true}
                horizontalOffset="20px"
                verticalOffset="10px"
              >
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    showSkeleton={true}
                    src={
                      "https://res.cloudinary.com/cinecus/image/upload/v1647622428/redux-cart/theregisti-HSXIp58yPyI-unsplash_qqcd87.jpg"
                    }
                    objectFit="cover"
                    width="100%"
                    height={220}
                    alt={"ชื่อสินค้า"}
                  />
                </Card.Body>
              </Badge>
              <Card.Footer
                css={{
                  justifyItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Text b>test</Text>
                <Text
                  css={{
                    color: "$accents7",
                    fontWeight: "$semibold",
                    fontSize: "$sm",
                  }}
                >
                  100 บาท
                </Text>

                <Button css={{ w: "100%" }}>เพิ่มลงตะกร้า</Button>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
    </Grid.Container>
  );
};

export default ProductListSection;
