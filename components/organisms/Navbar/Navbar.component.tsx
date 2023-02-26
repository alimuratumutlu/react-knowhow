import { Navbar, Group, Text, ScrollArea } from '@mantine/core';
import {
  IconNotes,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconLink,
} from '@tabler/icons';
import { UserButton } from '../../molecules/UserButton/UserButton.component';
import { LinksGroup } from '../../molecules/NavbarLinksGroup/NavbarLinksGroup.component';
import { ColorSchemeToggle } from '../../molecules/ColorSchemeToggle/ColorSchemeToggle';

import useStyles from './Navbar.styles';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Algorithms',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Data Structures', link: '/' },
      { label: 'Sorting Algorithms', link: '/' },
      { label: 'Searching Algorithms', link: '/' },
      { label: 'Graph Algorithms', link: '/' },
      { label: 'Dynamic Programming', link: '/' },
      { label: 'Optimization Algorithms', link: '/' },
      { label: 'Machine Learning Algorithms', link: '/' },
    ],
  },
  {
    label: 'Authenticaton & Security',
    icon: IconLock,
    links: [
      { label: 'Access Control', link: '/' },
      { label: 'Authentication', link: '/' },
      { label: 'Best Practices', link: '/' },
      { label: 'Cookies & Tokens', link: '/' },
      { label: 'Encryptionn', link: '/' },
      { label: 'Firebase Authentication', link: '/' },
      { label: 'Logging and Auditing', link: '/' },
      { label: 'Network Security', link: '/' },
    ],
  },
  {
    label: 'API Integration',
    icon: IconLock,
    links: [
      { label: 'API Design', link: '/' },
      { label: 'API Management', link: '/' },
      { label: 'API Security', link: '/' },
      { label: 'API Testing', link: '/' },
    ],
  },
  {
    label: 'Blockchain',
    icon: IconLink,
    links: [
      { label: 'Blockchain Development', link: '/' },
      { label: 'Consensus Mechanisms', link: '/' },
      { label: 'Decentralized Apps (DApps)', link: '/' },
      { label: 'Security and Privacy', link: '/' },
      { label: 'Smart Contracts', link: '/' },
    ],
  },
  {
    label: 'CI / CD Knowledge',
    icon: IconLock,
    links: [
      { label: 'CI/CD Tools and Techs', link: '/' },
      { label: 'Automated Testing', link: '/' },
      { label: 'Continuous Deployment', link: '/' },
      { label: 'Monitoring and Logging', link: '/' },
      { label: 'Security and Compliance', link: '/' },
    ],
  },
  {
    label: 'Cloud Integrations',
    icon: IconLock,
    links: [
      { label: 'API Integration', link: '/' },
      { label: 'Database Integration', link: '/' },
      { label: 'Function Integration', link: '/' },
      { label: 'Storage Integration', link: '/' },
      { label: 'Deployment', link: '/' },
    ],
  },
  {
    label: 'CSS & UI Design',
    icon: IconPresentationAnalytics,
    links: [
      { label: 'Responsive Design', link: '/' },
      { label: 'UI Design Principles', link: '/' },
      { label: 'Animation and Effects', link: '/' },
      { label: 'Preprocessors', link: '/' },
      { label: 'Performance Optimization', link: '/' },
    ],
  },
  {
    label: 'Project Management',
    icon: IconPresentationAnalytics,
    links: [
      { label: 'Introduction', link: '/' },
      { label: 'Project Planning', link: '/' },
      { label: 'Team Management', link: '/' },
      { label: 'Quality Management', link: '/' },
      { label: 'Agile Methodology', link: '/' },
      { label: 'Project Closure', link: '/' },
    ],
  },
  {
    label: 'React Best Practices',
    icon: IconPresentationAnalytics,
    links: [
      { label: 'Accessibility', link: '/' },
      { label: 'Component Architrecture', link: '/' },
      { label: 'Error Handling', link: '/' },
      { label: 'Performance Optimization', link: '/' },
      { label: 'State Management', link: '/' },
      { label: 'Testing', link: '/' },
    ],
  },
  {
    label: 'React Challenges',
    icon: IconLock,
    links: [
      { label: 'Introduction', link: '/' },
      { label: '3D Object Listing on Mapbox', link: '/' },
      { label: 'Ad Income Calculator', link: '/' },
      { label: 'Chrome Extension', link: '/' },
      { label: 'Crypto Tracker', link: '/' },
      { label: 'Hotel Directory', link: '/' },
      { label: 'NFT Marketplace', link: '/' },
      { label: 'Music Player', link: '/' },
      { label: 'NotionDB Integration', link: '/' },
      { label: 'OpenAI Integration', link: '/' },
      { label: 'Quiz App (Commercial)', link: '/' },
      { label: 'Outdoor Review App', link: '/' },
      { label: 'Shopify Storefront', link: '/' },
      { label: 'Sudoku Game', link: '/' },
      { label: 'Three.js Objects', link: '/' },
    ],
  },
  {
    label: 'React Hooks (Custom)',
    icon: IconLock,
    links: [
      { label: 'useArray', link: '/' },
      { label: 'useAsync', link: '/' },
      { label: 'useAsyncEffect', link: '/' },
      { label: 'useAudio', link: '/' },
      { label: 'useAuthentication', link: '/' },
      { label: 'useAnimationFrame', link: '/' },
      { label: 'useBreakpoint', link: '/' },
      { label: 'useClickOutside', link: '/' },
      { label: 'useColorScheme', link: '/' },
      { label: 'useCookie', link: '/' },
      { label: 'useCopyToClipboard', link: '/' },
      { label: 'useDarkMode', link: '/' },
      { label: 'useDebugInformation', link: '/' },
      { label: 'useDebounce', link: '/' },
      { label: 'useDebouncedCallback', link: '/' },
      { label: 'useDeepCompareEffect', link: '/' },
      { label: 'useDynamicScript', link: '/' },
      { label: 'useEffectOnce', link: '/' },
      { label: 'useFetch', link: '/' },
      { label: 'useFocusTrap', link: '/' },
      { label: 'useForm', link: '/' },
      { label: 'useGeolocation', link: '/' },
      { label: 'useHover', link: '/' },
      { label: 'useHoverDelay', link: '/' },
      { label: 'useIdleTimeout', link: '/' },
      { label: 'useInfiniteScroll', link: '/' },
      { label: 'useIntersectionObserver', link: '/' },
      { label: 'useInterval', link: '/' },
      { label: 'useIntervalCountdown', link: '/' },
      { label: 'useKey', link: '/' },
      { label: 'useKeyPress', link: '/' },
      { label: 'useLocation', link: '/' },
      { label: 'useLocalStorage', link: '/' },
      { label: 'useLongPress', link: '/' },
      { label: 'useMeasure', link: '/' },
      { label: 'useMediaQuery', link: '/' },
      { label: 'useNetworkStatus', link: '/' },
      { label: 'useOffline', link: '/' },
      { label: 'useOnScreen', link: '/' },
      { label: 'useOnlineStatus', link: '/' },
      { label: 'usePagination', link: '/' },
      { label: 'usePrevious', link: '/' },
      { label: 'usePreviousEffect', link: '/' },
      { label: 'useQueryParam', link: '/' },
      { label: 'useRenderCount', link: '/' },
      { label: 'useResizeObserver', link: '/' },
      { label: 'useScript', link: '/' },
      { label: 'useScrollToTop', link: '/' },
      { label: 'useSessionStorage', link: '/' },
      { label: 'useSmartLink', link: '/' },
      { label: 'useSize', link: '/' },
      { label: 'useSmoothScroll', link: '/' },
      { label: 'useStorage', link: '/' },
      { label: 'useStateWithHistory', link: '/' },
      { label: 'useStateWithValidation', link: '/' },
      { label: 'useThrottle', link: '/' },
      { label: 'useTitle', link: '/' },
      { label: 'useToggle', link: '/' },
      { label: 'useUpdateEffect', link: '/' },
      { label: 'useValidation', link: '/' },
      { label: 'useValidatedState', link: '/' },
      { label: 'useVirtualList', link: '/' },
      { label: 'useWebSocket', link: '/' },
      { label: 'useWindowFocus', link: '/' },
      { label: 'useWindowSize', link: '/' },
    ],
  },
  {
    label: 'Software Architecture',
    icon: IconAdjustments,
    links: [
      { label: 'Architecture Decisions', link: '/' },
      { label: 'Design Patterns', link: '/' },
      { label: 'Cloud Architecture', link: '/' },
      { label: 'Performance Architecture', link: '/' },
      { label: 'Security Architecture', link: '/' },
      { label: 'Component-Based Architecture', link: '/' },
      { label: 'Event-Driven Architecture', link: '/' },
      { label: 'Layered Architecture', link: '/' },
      { label: 'Microkernel Architecture', link: '/' },
      { label: 'Microservices Architecture', link: '/' },
      { label: 'Orchestration-Driven Architecture', link: '/' },
      { label: 'Pipeline Architecture', link: '/' },
      { label: 'Service-Based Architecture', link: '/' },
      { label: 'Space-Based Architecture', link: '/' },
    ],
  },
];

export function NavbarNested() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section>
        <Group className={classes.header} position="apart">
          <Text inherit variant="gradient" component="span" className={classes.logo}>
            Muum Dev.
          </Text>
          <ColorSchemeToggle />
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://pbs.twimg.com/profile_images/1615697459614781441/HdLAhn-1_400x400.jpg"
          name="Murat Umutlu"
          email="murat@muum.dev"
        />
      </Navbar.Section>
    </Navbar>
  );
}
