import { useState } from "react";
import {
  Box,
  Center,
  ChakraProvider,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/navbar";
import theme from "./theme";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = { navigation: "drawer", navigationButton: true };

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <ChakraProvider theme={theme}>
        <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box ml={!variants?.navigationButton && 200}>
          <Navbar
            showSidebarButton={variants?.navigationButton}
            onShowSidebar={toggleSidebar}
          />
        </Box>

        <Box my={5}>
          <Center>
            <Heading variant="h2">Home Page</Heading>
          </Center>
          <Center>
            <Heading variant="h2">About Page</Heading>
          </Center>
          <Center>
            <Heading variant="h2">Contact Page</Heading>
          </Center>
        </Box>
      </ChakraProvider>
    </>
  );
}
