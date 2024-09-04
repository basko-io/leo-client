import {
    IconHome2,
    IconInfoCircle
} from '@tabler/icons-react';

export interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    link?: string;
    active?: boolean;
    onClick?(): void;
}

export const NavbarConfig: NavbarLinkProps[] = [
    { icon: IconHome2, label: 'Home', link: "/" },
    // { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
    // { icon: IconCalendarStats, label: 'Releases' },
    // { icon: IconUser, label: 'Account' },
    // { icon: IconFingerprint, label: 'Security' },
    // { icon: IconSettings, label: 'Settings' },
    { icon: IconInfoCircle, label: 'About', link: "/about" },

];