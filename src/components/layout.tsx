import React, { ReactNode, useState, useEffect } from 'react';
import { AppShell } from '@mantine/core';
import { Navbar } from "./navigation/Navbar";
import { Transition } from '@mantine/core';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionIn, setTransitionIn] = useState(true);

  useEffect(() => {
    setTransitionIn(false);
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionIn(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [children]);



  return (
    <AppShell
      navbar={{
        width: "10vw",
        breakpoint: 'sm',
      }}
      padding="md">

      <AppShell.Navbar withBorder={false}>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Transition
          mounted={transitionIn}
          transition={"fade-right"}
          duration={500}
          timingFunction="ease"
        >
          {(styles) => <div style={styles}>{displayChildren}</div>}
        </Transition>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;