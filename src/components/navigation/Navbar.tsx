import { Center, Stack, NavLink, Image, MantineTheme, Tooltip } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

import classes from './Navbar.module.css';
import baskoioLogo from 'src/components/assets/img/basko-io.png';
import { NavbarConfig } from '../../config/navigation';
import { ColorSchemeToggle } from './ColorSchemeToggle';

export function Navbar() {
    // const theme = useMantineTheme();
    const colorScheme = useColorScheme();

    // const [isActive, setIsActive] = useState(0);
    const links = NavbarConfig.map((item) => (

        <Tooltip
            label={item.label}
            position="right"
        >
            <NavLink
                href={item.link}
                key={item.label}
                active={location.pathname === item.link}
                description={item.label}
                leftSection={<item.icon size="1.5rem" stroke={1.5} />}
                styles={(theme: MantineTheme) => ({
                    root: {
                        borderRadius: theme.radius.lg,
                        border: `0px solid ${location.pathname === item.link
                            ? theme.colors[theme.primaryColor][1]
                            : theme.colors.gray[3]
                            }`,
                        marginBottom: theme.spacing.sm,

                        '&:hover': {
                            backgroundColor: colorScheme === 'dark'
                                ? theme.colors.dark[5]
                                : theme.colors.gray[0],
                        },
                    }
                })}
            />
        </Tooltip>
    ));

    return (
        <nav className={classes.navbar}>
            <Center>
                <a href="https://github.com/basko-io" target="_blank">
                    <Image src={baskoioLogo} radius="md" h={40} />
                </a>
            </Center>

            <div className={classes.navbarMain}>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>

            <Center>
                <ColorSchemeToggle />
            </Center>
        </nav>
    );
}