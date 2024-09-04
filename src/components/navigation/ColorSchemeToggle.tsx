import { UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { IconSunFilled, IconMoon } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();


  const toggleColorScheme = () => {
    const nextColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(nextColorScheme);
  };

  return (
    <UnstyledButton
      onClick={toggleColorScheme}
      aria-label="Toggle color scheme"
    >
      {colorScheme === 'dark' ? <IconSunFilled size={20} /> : <IconMoon size={20} stroke={1.3} />}
    </UnstyledButton >
  );
}