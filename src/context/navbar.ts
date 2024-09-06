import { createContext } from 'react';

interface NavbarContextProps {
  activeDirectory: string;
  setActiveDirectory: (value: string) => void;
}

const NavbarContext = createContext<NavbarContextProps>({
  activeDirectory: 'home',
  setActiveDirectory: () => {},
});

export { NavbarContext };
