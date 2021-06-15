import { Box, IconButton, Text, HStack } from "@chakra-ui/react";

const Navbar = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <HStack bg="#e7e7f4" px={4} py="3" color="white" alignItems="center">
      <Box>
        {showSidebarButton && (
          <IconButton
            icon={">"}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Box ml="3">
        <Text fontSize="xl" color="#5d9b9d">Your App</Text>
      </Box>
    </HStack>
  );
};

export default Navbar;
