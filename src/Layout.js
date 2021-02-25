import { Container } from '@chakra-ui/react';
import Header from '../src/components/Header3';
import Footer from '../src/components/Footer';
import Footer2 from '../src/components/Footer2';
import Footer3 from '../src/components/Footer3';

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<Container maxW={'7xl'}>{children}</Container>
			<Footer />
			<Footer2 />
			<Footer3 />
		</div>
	);
};
export default Layout;
