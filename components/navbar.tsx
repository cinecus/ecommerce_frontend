import React, { ReactNode } from "react";
import {
  Navbar as NavbarNextUI,
  Link,
  Text,
  Avatar,
  Dropdown,
  Button,
  Row,
} from "@nextui-org/react";
import {
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaSignInAlt,
  FaCartArrowDown,
  FaUser,
  FaHamburger,
  FaRegCircle,
} from "react-icons/fa";
import { RiCreativeCommonsLine } from "react-icons/ri";
import { useRouter } from "next/router";
import SignInModal from "./modals/signinModal";
import SignUpModal from "./modals/signupModal";

const Navbar = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = React.useState<boolean>(true);
  const [visible, setVisible] = React.useState<{
    signin: boolean;
    signup: boolean;
  }>({
    signin: false,
    signup: false,
  });
  const handler = (type: "signin" | "signup") =>
    setVisible({ ...visible, [type]: true });

  const closeHandler = (type: "signin" | "signup") => {
    setVisible({ ...visible, [type]: false });
  };

  return (
    <NavbarNextUI isBordered variant="floating">
      <NavbarNextUI.Brand
        css={{
          "@xs": {
            w: "12%",
          },
          cursor: "pointer",
          gap: "$1",
        }}
        onClick={() => router.push("/")}
      >
        <RiCreativeCommonsLine size={36} />
        <Text
          b
          hideIn="xs"
          css={{ textGradient: "45deg, $blue600 -20%, $purple600 50%" }}
        >
          CC Store
        </Text>
      </NavbarNextUI.Brand>

      <NavbarNextUI.Content
        enableCursorHighlight
        // gap={"$4xl"}
        css={{
          "@xs": {
            jc: "flex-end",
          },
        }}
        activeColor="secondary"
        hideIn="xs"
      >
        {/* <NavbarNextUI.Link href="/about">เกี่ยวกับ</NavbarNextUI.Link>
        <NavbarNextUI.Link href="/feature">ฟีเจอร์</NavbarNextUI.Link> */}
      </NavbarNextUI.Content>
      {!isAuth ? (
        <>
          {/* Un Authen */}
          <NavbarNextUI.Content hideIn={"xs"} gap="$12">
            <NavbarNextUI.Link href="/product">ดูสินค้า</NavbarNextUI.Link>
            <NavbarNextUI.Link href="/feature">ฟีเจอร์</NavbarNextUI.Link>
            <NavbarNextUI.Item>
              <Button
                css={{
                  bc: "$colors$primarySolidContrast",
                  color: "$colors$primary",
                }}
                bordered
                onClick={() => handler("signin")}
                auto
              >
                <Row
                  css={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "$5",
                  }}
                >
                  <FaSignInAlt size={18} />
                  <Text size={16} css={{ color: "$colors$primary" }}>
                    เข้าสู่ระบบ
                  </Text>
                </Row>
              </Button>
            </NavbarNextUI.Item>
            <NavbarNextUI.Item>
              <Button onClick={() => handler("signup")} auto>
                ลงทะเบียน
              </Button>
            </NavbarNextUI.Item>
          </NavbarNextUI.Content>
        </>
      ) : (
        <>
          {/* Authen */}
          <NavbarNextUI.Content
            css={{
              "@xs": {
                jc: "flex-end",
              },
            }}
          
            gap="$12"
          >
            <NavbarNextUI.Link href="/product"  hideIn={"xs"}>ดูสินค้า</NavbarNextUI.Link>
            <NavbarNextUI.Link href="/feature"   hideIn={"xs"}>ฟีเจอร์</NavbarNextUI.Link>
            <NavbarNextUI.Link href="/cart">
              <FaCartArrowDown size={24} />
            </NavbarNextUI.Link>
            <NavbarNextUI.Link hideIn={"xs"}>Customer name</NavbarNextUI.Link>
            <Dropdown placement="bottom-right">
              <NavbarNextUI.Item>
                <Dropdown.Trigger>
                  <Avatar size="lg" pointer text="UserName" />
                </Dropdown.Trigger>
              </NavbarNextUI.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                // onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </NavbarNextUI.Content>
        </>
      )}
      <NavbarNextUI.Content showIn={"xs"}>
        <Dropdown placement="bottom-right">
          <NavbarNextUI.Item>
            <Dropdown.Trigger>
              <Button light auto icon={<FaHamburger size={20} />} size={"xs"} />
            </Dropdown.Trigger>
          </NavbarNextUI.Item>
          {isAuth ? (
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              // onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="product" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  สินค้า
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="feature" css={{ height: "$18" }}>
                <Link href="/feature">
                  <Text b color="inherit" css={{ d: "flex" }}>
                    ฟีเจอร์
                  </Text>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          ) : (
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              // onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="product" css={{ height: "$18" }}>
                <Link href="/product" color="text">
                  <Text b color="inherit" css={{ d: "flex" }}>
                    สินค้า
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="feature" css={{ height: "$18" }}>
                <Link href="/feature" color="text">
                  <Text b color="inherit" css={{ d: "flex" }}>
                    ฟีเจอร์
                  </Text>
                </Link>
              </Dropdown.Item>

              <Dropdown.Section>
                <Dropdown.Item key="signup" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    ลงทะเบียน
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="signin" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    เข้าสู่ระบบ
                  </Text>
                </Dropdown.Item>
              </Dropdown.Section>
            </Dropdown.Menu>
          )}
        </Dropdown>
      </NavbarNextUI.Content>

      {/* Modal Sign In */}
      <SignInModal visible={visible} closeHandler={closeHandler}/>
      {/* Modal Sign Up */}
      <SignUpModal  visible={visible} closeHandler={closeHandler}/>
    </NavbarNextUI>
  );
};

export default Navbar;

export const AcmeLogo = () => (
  <svg
    className=""
    fill="none"
    height="36"
    viewBox="0 0 32 32"
    width="36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);


