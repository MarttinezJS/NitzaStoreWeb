import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Spacer,
} from "@nextui-org/react";

export const Menu = () => {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">NITZA</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link>Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">New</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" aria-current="page">
            Pre order
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">Contact</Link>
        </NavbarItem>
        <Spacer />
        <NavbarItem className="hidden lg:flex">
          <Link>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
