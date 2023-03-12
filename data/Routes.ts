import {
  IconNotes,
  IconGauge,
  IconPresentationAnalytics,
  IconAdjustments,
  IconLock,
  IconLink,
} from '@tabler/icons';

export const userLinks = [
  {
    link: '#',
    label: 'Privacy & Security',
  },
  {
    link: '#',
    label: 'Account settings',
  },
  {
    link: '#',
    label: 'Support options',
  },
];

export const mainLinks = [
  {
    link: '#',
    label: 'Book a demo',
  },
  {
    link: '#',
    label: 'Documentation',
  },
  {
    link: '#',
    label: 'Community',
  },
  {
    link: '#',
    label: 'Academy',
  },
  {
    link: '#',
    label: 'Forums',
  },
];

const Routes = [
  {
    label: 'Murat Umutlu',
    icon: IconGauge,
    initiallyOpened: true,
    links: [
      { label: 'CV Resume', link: '/' },
      { label: 'Open Source Projects', link: '/cv-resume/open-source-projects' },
      { label: 'Industrial Experience', link: '/cv-resume/industrial-experience' },
    ],
  },
  {
    label: 'Algorithms',
    icon: IconNotes,
  },
  {
    label: 'Authenticaton',
    icon: IconLock,
    links: [
      { label: 'Access Control', link: '/authentication-security/access-control' },
      { label: 'Authentication', link: '/authentication-security/authentication' },
      { label: 'Best Practices', link: '/authentication-security/best-practices' },
      { label: 'Cookies & Tokens', link: '/authentication-security/cookies-tokens' },
      { label: 'Encryption', link: '/authentication-security/encryption' },
      {
        label: 'Firebase Authentication',
        link: '/authentication-security/firebase-authentication',
      },
      { label: 'Logging & Auditing', link: '/authentication-security/logging-auditing' },
      { label: 'Network Security', link: '/authentication-security/network-security' },
    ],
  },
  {
    label: 'Blockchain',
    icon: IconLink,
    links: [
      { label: 'Blockchain Development', link: '/blockchain/blockchain-development' },
      { label: 'Consensus Mechanisms', link: '/blockchain/consensus-mechanisms' },
      { label: 'Decentralized Apps (DApps)', link: '/blockchain/decentralized-apps' },
      { label: 'Security & Privacy', link: '/blockchain/security-privacy' },
      { label: 'Smart Contracts', link: '/blockchain/smart-contracts' },
    ],
  },
  {
    label: 'CI / CD Knowledge',
    icon: IconLock,
    links: [
      { label: 'CI/CD Tools & Techs', link: '/ci-cd-knowledge/ci-cd-tools-techs' },
      { label: 'Automated Testing', link: '/ci-cd-knowledge/automated-testing' },
      { label: 'Continuous Monitoring', link: '/ci-cd-knowledge/continuous-monitoring' },
      { label: 'Continuous Integration', link: '/ci-cd-knowledge/continuous-integration' },
      { label: 'Continuous Delivery', link: '/ci-cd-knowledge/continuous-delivery' },
      { label: 'Continuous Deployment', link: '/ci-cd-knowledge/continuous-deployment' },
      { label: 'Continuous Feedback', link: '/ci-cd-knowledge/continuous-feedback' },
      { label: 'Security & Compliance', link: '/ci-cd-knowledge/security-compliance' },
    ],
  },
  {
    label: 'Cloud Integrations',
    icon: IconLock,
    links: [
      { label: 'API Integration', link: '/cloud-integration/api-integration' },
      { label: 'Database Integration', link: '/cloud-integration/database-integration' },
      { label: 'Function Integration', link: '/cloud-integration/function-integration' },
      { label: 'Storage Integration', link: '/cloud-integration/storage-integration' },
      { label: 'Deployment', link: '/cloud-integration/deployment' },
    ],
  },
  {
    label: 'CSS & UI Design',
    icon: IconPresentationAnalytics,
    links: [
      { label: 'Responsive Design', link: '/css-ui-design/responsive-design' },
      { label: 'UI Design Principles', link: '/css-ui-design/ui-design-principles' },
      { label: 'Animation & Effects', link: '/css-ui-design/animation-effects' },
      { label: 'Preprocessors', link: '/css-ui-design/preprocessors' },
      { label: 'Performance Optimization', link: '/css-ui-design/performance-optimization' },
    ],
  },
  {
    label: 'Project Management',
    icon: IconPresentationAnalytics,
    links: [
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
      { label: 'Accessibility', link: '/react-best-practices/accessibility' },
      { label: 'Component Architecture', link: '/react-best-practices/component-architecture' },
      { label: 'Error Handling', link: '/react-best-practices/error-handling' },
      { label: 'Performance Optimization', link: '/react-best-practices/performance-optimization' },
      { label: 'State Management', link: '/react-best-practices/state-management' },
      { label: 'Testing', link: '/react-best-practices/testing' },
    ],
  },
  {
    label: 'React Challenges',
    icon: IconLock,
    links: [
      {
        label: '3D Object Listing on Mapbox',
        link: '/react-challenges/3d-object-listing-on-mapbox',
      },
      { label: 'Ad Income Calculator', link: '/react-challenges/ad-income-calculator' },
      { label: 'Chrome Extension', link: '/react-challenges/chrome-extension' },
      { label: 'Crypto Tracker', link: '/react-challenges/crypto-tracker' },
      { label: 'Hotel Directory', link: '/react-challenges/hotel-directory' },
      { label: 'NFT Marketplace', link: '/react-challenges/nft-marketplace' },
      { label: 'Music Player', link: '/react-challenges/music-player' },
      { label: 'NotionDB Integration', link: '/react-challenges/notiondb-integration' },
      { label: 'OpenAI Integration', link: '/react-challenges/openai-integration' },
      { label: 'Quiz App (Commercial)', link: '/react-challenges/quiz-app-commercial' },
      { label: 'Outdoor Review App', link: '/react-challenges/outdoor-review-app' },
      { label: 'Shopify Storefront', link: '/react-challenges/shopify-storefront' },
      { label: 'Sudoku Game', link: '/react-challenges/sudoku-game' },
      { label: 'Three.js Objects', link: '/react-challenges/three-js-objects' },
    ],
  },
  {
    label: 'React Hooks (Custom)',
    icon: IconLock,
    links: [
      { label: 'useArray', link: '/react-custom-hooks/useArray' },
      { label: 'useAsync', link: '/react-custom-hooks/useAsync' },
      { label: 'useAsyncEffect', link: '/react-custom-hooks/useAsyncEffect' },
      { label: 'useAudio', link: '/react-custom-hooks/useAudio' },
      { label: 'useAuthentication', link: '/react-custom-hooks/useAuthentication' },
      { label: 'useAnimationFrame', link: '/react-custom-hooks/useAnimationFrame' },
      { label: 'useBreakpoint', link: '/react-custom-hooks/useBreakpoint' },
      { label: 'useClickOutside', link: '/react-custom-hooks/useClickOutside' },
      { label: 'useColorScheme', link: '/react-custom-hooks/useColorScheme' },
      { label: 'useCookie', link: '/react-custom-hooks/useCookie' },
      { label: 'useCopyToClipboard', link: '/react-custom-hooks/useCopyToClipboard' },
      { label: 'useDarkMode', link: '/react-custom-hooks/useDarkMode' },
      { label: 'useDebugInformation', link: '/react-custom-hooks/useDebugInformation' },
      { label: 'useDebounce', link: '/react-custom-hooks/useDebounce' },
      { label: 'useDebouncedCallback', link: '/react-custom-hooks/useDebouncedCallback' },
      { label: 'useDeepCompareEffect', link: '/react-custom-hooks/useDeepCompareEffect' },
      { label: 'useDynamicScript', link: '/react-custom-hooks/useDynamicScript' },
      { label: 'useEffectOnce', link: '/react-custom-hooks/useEffectOnce' },
      { label: 'useFetch', link: '/react-custom-hooks/useFetch' },
      { label: 'useFocusTrap', link: '/react-custom-hooks/useFocusTrap' },
      { label: 'useForm', link: '/react-custom-hooks/useForm' },
      { label: 'useGeolocation', link: '/react-custom-hooks/useGeolocation' },
      { label: 'useHover', link: '/react-custom-hooks/useHover' },
      { label: 'useHoverDelay', link: '/react-custom-hooks/useHoverDelay' },
      { label: 'useIdleTimeout', link: '/react-custom-hooks/useIdleTimeout' },
      { label: 'useInfiniteScroll', link: '/react-custom-hooks/useInfiniteScroll' },
      { label: 'useIntersectionObserver', link: '/react-custom-hooks/useIntersectionObserver' },
      { label: 'useInterval', link: '/react-custom-hooks/useInterval' },
      { label: 'useIntervalCountdown', link: '/react-custom-hooks/useIntervalCountdown' },
      { label: 'useKey', link: '/react-custom-hooks/useKey' },
      { label: 'useKeyPress', link: '/react-custom-hooks/useKeyPress' },
      { label: 'useLocation', link: '/react-custom-hooks/useLocation' },
      { label: 'useLocalStorage', link: '/react-custom-hooks/useLocalStorage' },
      { label: 'useLongPress', link: '/react-custom-hooks/useLongPress' },
      { label: 'useMeasure', link: '/react-custom-hooks/useMeasure' },
      { label: 'useMediaQuery', link: '/react-custom-hooks/useMediaQuery' },
      { label: 'useNetworkStatus', link: '/react-custom-hooks/useNetworkStatus' },
      { label: 'useOffline', link: '/react-custom-hooks/useOffline' },
      { label: 'useOnScreen', link: '/react-custom-hooks/useOnScreen' },
      { label: 'useOnlineStatus', link: '/react-custom-hooks/useOnlineStatus' },
      { label: 'usePagination', link: '/react-custom-hooks/usePagination' },
      { label: 'usePrevious', link: '/react-custom-hooks/usePrevious' },
      { label: 'usePreviousEffect', link: '/react-custom-hooks/usePreviousEffect' },
      { label: 'useQueryParam', link: '/react-custom-hooks/useQueryParam' },
      { label: 'useRenderCount', link: '/react-custom-hooks/useRenderCount' },
      { label: 'useResizeObserver', link: '/react-custom-hooks/useResizeObserver' },
      { label: 'useScript', link: '/react-custom-hooks/useScript' },
      { label: 'useScrollToTop', link: '/react-custom-hooks/useScrollToTop' },
      { label: 'useSessionStorage', link: '/react-custom-hooks/useSessionStorage' },
      { label: 'useSmartLink', link: '/react-custom-hooks/useSmartLink' },
      { label: 'useSize', link: '/react-custom-hooks/useSize' },
      { label: 'useSmoothScroll', link: '/react-custom-hooks/useSmoothScroll' },
      { label: 'useStorage', link: '/react-custom-hooks/useStorage' },
      { label: 'useStateWithHistory', link: '/react-custom-hooks/useStateWithHistory' },
      { label: 'useStateWithValidation', link: '/react-custom-hooks/useStateWithValidation' },
      { label: 'useThrottle', link: '/react-custom-hooks/useThrottle' },
      { label: 'useTitle', link: '/react-custom-hooks/useTitle' },
      { label: 'useToggle', link: '/react-custom-hooks/useToggle' },
      { label: 'useUpdateEffect', link: '/react-custom-hooks/useUpdateEffect' },
      { label: 'useValidation', link: '/react-custom-hooks/useValidation' },
      { label: 'useValidatedState', link: '/react-custom-hooks/useValidatedState' },
      { label: 'useVirtualList', link: '/react-custom-hooks/useVirtualList' },
      { label: 'useWebSocket', link: '/react-custom-hooks/useWebSocket' },
      { label: 'useWindowFocus', link: '/react-custom-hooks/useWindowFocus' },
      { label: 'useWindowSize', link: '/react-custom-hooks/useWindowSize' },
    ],
  },
  {
    label: 'Development Methodologies',
    icon: IconPresentationAnalytics,
    links: [
      { label: 'Waterfall Model', link: '/development-methodologies/waterfall-model' },
      { label: 'Agile Development', link: '/development-methodologies/agile-development' },
      { label: 'Scrum', link: '/development-methodologies/scrum' },
      { label: 'Extreme Programming (XP)', link: '/development-methodologies/extreme-programming' },
      { label: 'Kanban', link: '/development-methodologies/kanban' },
      {
        label: 'Feature Driven Development (FDD)',
        link: '/development-methodologies/feature-driven-development',
      },
      { label: 'Crystal Clear', link: '/development-methodologies/crystal-clear' },
      { label: 'Lean Development', link: '/development-methodologies/lean-development' },
      {
        label: 'Dynamic Systems Development Method (DSDM)',
        link: '/development-methodologies/dynamic-systems-development-method',
      },
      {
        label: 'Rapid Application Development (RAD)',
        link: '/development-methodologies/rapid-application-development',
      },
      { label: 'Spiral Model', link: '/development-methodologies/spiral-model' },
      {
        label: 'Test Driven Development (TDD)',
        link: '/development-methodologies/test-driven-development',
      },
      {
        label: 'Behavior Driven Development (BDD)',
        link: '/development-methodologies/behavior-driven-development',
      },
      {
        label: 'Acceptance Test Driven Development (ATDD)',
        link: '/development-methodologies/acceptance-test-driven-development',
      },
      {
        label: 'Domain Driven Design (DDD)',
        link: '/development-methodologies/domain-driven-design',
      },
      {
        label: 'Continuous Integration/Continuous Delivery (CI/CD)',
        link: '/development-methodologies/continuous-integration-continuous-delivery',
      },
    ],
  },
  {
    label: 'Software Architecture',
    icon: IconAdjustments,
    links: [
      { label: 'Architecture Decisions', link: '/software-architecture/architecture-decisions' },
      { label: 'Design Patterns', link: '/software-architecture/design-patterns' },
      { label: 'Cloud Architecture', link: '/software-architecture/cloud-architecture' },
      {
        label: 'Performance Architecture',
        link: '/software-architecture/performance-architecture',
      },
      { label: 'Security Architecture', link: '/software-architecture/security-architecture' },
      {
        label: 'Component-Based Architecture',
        link: '/software-architecture/component-based-architecture',
      },
      {
        label: 'Event-Driven Architecture',
        link: '/software-architecture/event-driven-architecture',
      },
      { label: 'Layered Architecture', link: '/software-architecture/layered-architecture' },
      {
        label: 'Microkernel Architecture',
        link: '/software-architecture/microkernel-architecture',
      },
      {
        label: 'Microservices Architecture',
        link: '/software-architecture/microservices-architecture',
      },
      {
        label: 'Orchestration-Driven Architecture',
        link: '/software-architecture/orchestration-driven-architecture',
      },
      { label: 'Pipeline Architecture', link: '/software-architecture/pipeline-architecture' },
      {
        label: 'Service-Based Architecture',
        link: '/software-architecture/service-based-architecture',
      },
      {
        label: 'Space-Based Architecture',
        link: '/software-architecture/space-based-architecture',
      },
    ],
  },
];

export default Routes;
