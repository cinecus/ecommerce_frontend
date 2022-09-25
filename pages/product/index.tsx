import type { NextPage } from "next";
import { Container, Grid } from "@nextui-org/react";

import React from "react";
import FilterProductSection from "../../components/product/FilterProductSection";
import ProductListSection from "../../components/product/ProductListSection";
import SortSection from "../../components/product/SortSection";
import AlertModal from "../../components/modals/alertModal";


const ProductPage: NextPage = () => {
 
  return (
    <Container css={{ mt: "$15", "@xl": { px: "12%" } }}>
      <Grid.Container gap={2} justify="center">
        {/* #filter */}
        <Grid xs={12} sm={4}>
          <FilterProductSection />
        </Grid>

        {/* #product */}
        <Grid
          direction="column"
          xs={12}
          sm={8}
          css={{
            // bc: "$colors$primary",
            h: "auto",
            p: "$10",
            minHeight: "100vh",
          }}
        >
          {/* #Search */}
          <SortSection />
          {/* #Product */}
          <ProductListSection />
        </Grid>
      </Grid.Container>
      <AlertModal/>
    </Container>
  );
};

export default ProductPage;
