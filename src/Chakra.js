import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '../src/Layout';

const colors = {
	brand: {
		50: '#ecefff',
		100: '#cbceeb',
		200: '#a9aed6',
		300: '#888ec5',
		400: '#666db3',
		500: '#4d5499',
		600: '#3c4178',
		700: '#2a2f57',
		800: '#181c37',
		900: '#080819',
	},
};
const config = {
	initialColorMode: 'system',
	useSystemColorMode: true,
};

const theme = extendTheme({ colors, config });
export const Chakra = ({ children }) => {
	return (
		<ChakraProvider theme={theme}>
			<Layout>{children}</Layout>
		</ChakraProvider>
	);
};
