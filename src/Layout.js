import Header from '../src/components/Header3';
import Footer from '../src/components/Footer';
import { Container } from '@chakra-ui/react';

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<Container maxW={'7xl'}>{children}</Container>
			<Footer />
		</div>
	);
};
export default Layout;
