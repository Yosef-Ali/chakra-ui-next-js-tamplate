import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '../src/Layout';
const theme = extendTheme({
	config: {
		initialColorMode: 'system',
		useSystemColorMode: true,
	},
});

export const Chakra = ({ children }) => {
	return (
		<ChakraProvider theme={theme}>
			<Layout>{children}</Layout>
		</ChakraProvider>
	);
};
