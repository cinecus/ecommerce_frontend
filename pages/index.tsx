import type {
  NextPage
} from "next";
import {
  Container,
  Row,
  Card,
  Text,
  Grid,
  Image,
  Button,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { frontendTech, backendTech, otherTech } from "../constant";

const Home: NextPage = () => {

  return (
    <Container css={{ mt: "$15", "@xl": { px: "12%" } }}>
      <Grid.Container gap={2} justify="center">
        {/* Background */}
        <Grid xs={12} sm={5} alignItems="center" justify="center">
          <Container fluid>
            <Text
              h1
              size={48}
              css={{ textGradient: "45deg, $blue600 0%, $purple600 20%" }}
              weight="bold"
            >
              CC Store
            </Text>
            <Text h3 size={36} color="primary">
              Demo Ecommerce Web Service
            </Text>
            <Text size={20}>
              เว็บไซต์ตัวอย่างแพลตฟอร์มขายสินค้าออนไลน์ พัฒนาด้วย NEXT JS
            </Text>
            <Row css={{ mt: "$10" }}>
              <Button
                css={{ bc: "$black", borderColor: "$white", color: "$white" }}
                bordered
                icon={<FaGithub size={20} />}
                auto
              >
                <a href="https://github.com/cinecus">
                  <Text size={20}>Github</Text>
                </a>
              </Button>
              <Button
                css={{ bc: "$black", borderColor: "$white", color: "$white" }}
                auto
              >
                <a href="https://github.com/cinecus" target="_blank" rel="noreferrer">
                  <Text size={20}>ดูผลงานอื่น ๆ</Text>
                </a>
              </Button>
            </Row>
          </Container>
        </Grid>
        <Grid xs={12} sm={7}>
          <Image src={"/bg_hero.png"} objectFit="cover" width={"70%"} />
        </Grid>
      </Grid.Container>

      {/* Section #2 */}
      <Container fluid css={{ mt: "$20" }}>
        <Row justify="center">
          <Text
            b
            size={54}
            css={{ textGradient: "345deg, $blue600 40%, $purple600 60%" }}
          >
            Tech&nbsp;Stack
          </Text>
          <Text
            b
            size={54}
            css={{ textGradient: "45deg, $blue600 0%, $red600 20%" }}
          ></Text>
        </Row>
        <Row justify="center">
          <Text b size={20} css={{ color: "$accents7" }}>
            library หรือ framework ต่าง ๆ ที่ใช้พัฒนาโปรเจคนี้
          </Text>
        </Row>
      </Container>

      {/* Frontend */}
      <Container fluid css={{ mt: "$10" }}>
        <Row justify="flex-start">
          <Text b size={40} css={{ color: "$colors$myColor" }}>
            Front End&nbsp;
          </Text>
        </Row>
        <Row>
          <Text b size={20} css={{ color: "$accents7" }}>
            library หรือ framework ต่าง ๆ ที่ใช้พัฒนาฝั่ง Client
          </Text>
        </Row>
      </Container>
      <Grid.Container gap={2} justify="center" css={{ mt: "$10" }}>
        {frontendTech.map((el, i) => (
          <Grid xs={12} sm={3} alignItems="center" justify="center" key={i}>
            <Card variant="bordered" css={{ bgColor: "$accents9" }}>
              <Card.Body>
                <Image src={`/icon/${el.icon}`} height={100} />
                <Text color="primary" size={18} css={{ textAlign: "center" }}>
                  {el.title}
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
      {/* Backend */}
      <Container fluid css={{ mt: "$10" }}>
        <Row justify="flex-start">
          <Text b size={40} css={{ color: "$red700" }}>
            Back End&nbsp;
          </Text>
        </Row>
        <Row>
          <Text b size={20} css={{ color: "$accents7" }}>
            library หรือ framework ต่าง ๆ ที่ใช้พัฒนาฝั่ง Server
          </Text>
        </Row>
      </Container>
      <Grid.Container gap={2} justify="flex-start" css={{ mt: "$10" }}>
        {backendTech.map((el, i) => (
          <Grid xs={12} sm={3} alignItems="center" justify="center" key={i}>
            <Card variant="bordered" css={{ bgColor: "$accents9" }}>
              <Card.Body>
                <Image src={`/icon/${el.icon}`} height={100} />
                <Text color="primary" size={18} css={{ textAlign: "center" }}>
                  {el.title}
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
      {/* Other */}
      <Container fluid css={{ mt: "$10" }}>
        <Row justify="flex-start">
          <Text b size={40} css={{ color: "$blue600" }}>
            Other&nbsp;
          </Text>
        </Row>
        <Row>
          <Text b size={20} css={{ color: "$accents7" }}>
            เครื่องมืออื่น ๆ ที่ใช้พัฒนา
          </Text>
        </Row>
      </Container>
      <Grid.Container gap={2} justify="flex-start" css={{ mt: "$10" }}>
        {otherTech.map((el, i) => (
          <Grid xs={12} sm={3} alignItems="center" justify="center" key={i}>
            <Card variant="bordered" css={{ bgColor: "$accents9" }}>
              <Card.Body>
                <Image src={`/icon/${el.icon}`} height={100} />
                <Text color="primary" size={18} css={{ textAlign: "center" }}>
                  {el.title}
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default Home;
