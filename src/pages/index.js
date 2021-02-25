import { chakra } from '@chakra-ui/react';
import Head from 'next/head';
import { Chakra } from '../Chakra';

import Feature from '../components/Feature';
import Feature2 from '../components/Feature2';
import Feature3 from '../components/Feature3';
import Feature4 from '../components/Feature4';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import Hero3 from '../components/Hero3';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import Card4 from '../components/Card4';

const Home = () => (
	<Chakra>
		<Head>
			<title>Create Next App</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>

		<main>
			<Hero />
			<Hero2 />
			<Hero3 />
			<Feature />
			<Feature2 />
			<Feature3 />
			<Feature4 />
			<Card />
			<Card2 />
			<Card4 />
		</main>
	</Chakra>
);

export default Home;
