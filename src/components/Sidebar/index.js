import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const links = [
  {
    link: "Home",
    slug: "/home",
  },
  {
    link: "About",
    slug: "/about",
  },
  {
    link: "Contact",
    slug: "/contact",
  },
];

const SidebarContent = ({ slug, handleClick }) => {
  return (
    <VStack>
      {links.map((link) => (
        <Button
          key={link.slug}
          color={link.slug === slug ? "#fffff" : "#00000"}
          bg={link.slug === slug ? "#5d9b9d" : ""}
          onClick={() => handleClick(link)}
          w="100%"
        >
          {link.link}
        </Button>
      ))}
    </VStack>
  );
};

const Sidebar = ({ isOpen, variant, onClose }) => {
  const [slug, setSlug] = useState("");

  useEffect(() => {
    setSlug("/home");
  }, []);

  const handleClick = (link) => {
    setSlug(link.slug);
    onClose();
  };

  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bg="#dfdfdf"
    >
      <SidebarContent slug={slug} handleClick={handleClick} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra-UI</DrawerHeader>
          <DrawerBody>
            <SidebarContent slug={slug} handleClick={handleClick} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
