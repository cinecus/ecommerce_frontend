import React from "react";
import { Grid, Card, Badge, Text, Button, Row } from "@nextui-org/react";
import { useGetProductList } from "../../hooks/ProductHook";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { productType } from "../../types";
import { mapColorTag, mapTagTitle } from "../../function";
import { useAddToCart } from "../../hooks/CartHook";
import { toggleModal } from "../../store/slices/modalSlice";
import {numberFormat} from '../../function'

const ProductListSection = () => {
  const dispatch = useAppDispatch()
  const { data, isLoading, isError } = useGetProductList();
  const {me} = useAppSelector((state) => state.auth);
  const { mutate } = useAddToCart();
  const { productList, productShow } = useAppSelector((state) => state.product);
  return (
    <Grid.Container gap={2} justify="flex-start">
      {productShow.map((el: productType, i: number) => (
        <Grid xs={12} sm={4} css={{ h: "360px" }} key={i}>
          <Card
            borderWeight="light"
            variant="bordered"
            css={{ $$cardColor: "$colors$primaryLight", position: "relative" }}
            isPressable
          >
            <Row
              css={{
                position: "absolute",
                zIndex: 100,
                w: "200",
                left: 10,
                top: 10,
                gap: "$2",
              }}
            >
              {el.tags.map(
                (tag: "new" | "suggest" | "bestseller", j: number) => (
                  <Badge
                    key={j}
                    color={mapColorTag(tag)}
                    shape="rectangle"
                    disableOutline={true}
                  >
                    {mapTagTitle(tag)}
                  </Badge>
                )
              )}
            </Row>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                showSkeleton={true}
                src={el.image}
                objectFit="cover"
                width="100%"
                height={220}
                alt={el.name}
              />
            </Card.Body>

            <Card.Footer
              css={{
                justifyItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >

              <Text b>{el.name}</Text>
              <Text
                css={{
                  color: "$accents7",
                  fontWeight: "$semibold",
                  fontSize: "$sm",
                }}
              >
                {numberFormat((el.price))} บาท
              </Text>
              <Button
                css={{ w: "100%" }}
                onPress={() =>{
                  if(!me){
                    dispatch(toggleModal({key:"isSigninShow",status:"open"}))
                  }else{
                    mutate({ productID: el._id })
                  }
                }}
              >
                เพิ่มลงตะกร้า
              </Button>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default ProductListSection;
