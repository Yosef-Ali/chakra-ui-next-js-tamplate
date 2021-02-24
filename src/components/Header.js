import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorMode,
	Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Links = [ 'Dashboard', 'Projects', 'Team' ];

const NavLink = ({ children }) => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{ textDecoration: 'none', bg: 'gray.200' }}
		href={'#'}
	>
		{children}
	</Link>
);

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div>
			<Box bg={'gray.100'} px={4}>
				<Flex
					h={16}
					alignItems={'center'}
					justifyContent={'space-between'}
					maxW={'7xl'}
					mx={'auto'}
				>
					<IconButton
						size={'lg'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ lg: !isOpen ? 'none' : 'inherit' }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={'center'}>
						<Box>Logo</Box>
						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', lg: 'flex' }}
						>
							{Links.map(link => <NavLink key={link}>{link}</NavLink>)}
						</HStack>
					</HStack>
					<IconButton
						size={'sm'}
						variant={'ghost'}
						aria-label={'Toggle Color Mode'}
						onClick={toggleColorMode}
						icon={
							colorMode == 'light' ? (
								<IoMoon size={18} />
							) : (
								<IoSunny size={18} />
							)
						}
					/>
					<Flex alignItems={'center'}>
						<Menu>
							<MenuButton
								as={Button}
								rounded={'full'}
								variant={'link'}
								cursor={'pointer'}
							>
								<Avatar
									size={'sm'}
									src={
										'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
									}
								/>
							</MenuButton>
							<MenuList>
								<MenuItem>Link 1</MenuItem>
								<MenuItem>Link 2</MenuItem>
								<MenuDivider />
								<MenuItem>Link 3</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4}>
						<Stack as={'nav'} spacing={4}>
							{Links.map(link => <NavLink key={link}>{link}</NavLink>)}
						</Stack>
					</Box>
				) : null}
			</Box>
		</div>
	);
};

export default Header;
