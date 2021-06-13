import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter, FaDiscord } from 'react-icons/fa';
import { Button, Center, Stack, Text, Box, Flex } from '@chakra-ui/react';

const Login = () => {
  return (
    <Flex
      minH="100vh"
      height="full"
      justifyContent="center"
      alignItems="center"
    >
      <Center>
        <Box rounded="md" bgColor="whiteAlpha.100">
          <Stack
            spacing={2}
            my={50}
            px={10}
            align={'center'}
            maxW={'md'}
            w={'full'}
          >
            <Text fontWeight="extrabold" fontSize="xl" mb={2}>
              Sign in to Devmark.
            </Text>
            <Button w={'full'} variant={'outline'} leftIcon={<FaFacebook />}>
              <Center>
                <Text>Continue with Facebook</Text>
              </Center>
            </Button>

            <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>

            <Button w={'full'} variant={'outline'} leftIcon={<FaTwitter />}>
              <Center>
                <Text>Continue with Twitter</Text>
              </Center>
            </Button>

            <Button w={'full'} variant={'outline'} leftIcon={<FaDiscord />}>
              <Center>
                <Text>Continue with Dicord</Text>
              </Center>
            </Button>
          </Stack>
        </Box>
      </Center>
    </Flex>
  );
};

export default Login;