import type { NextPage } from "next";
import {
  Container,
  Grid,
} from "@nextui-org/react";
import TableCart from "../../components/cart/TableCartSection";
import SummarySection from "../../components/cart/SummarySection";


const CartPage = () => {
  return (
    <Container css={{ mt: "$15","@xl": { px: "12%" } }}>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={8}>
          <TableCart />
        </Grid>
        <Grid xs={12} sm={4}>
          <SummarySection/>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default CartPage;
