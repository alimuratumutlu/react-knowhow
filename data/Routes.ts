import { IconNotes, IconPresentationAnalytics, IconLock } from '@tabler/icons';

const Routes = [
  {
    label: 'Algorithms & Data Structures',
    icon: IconNotes,
    color: 'red',
    links: [
      {
        label: 'Algorithms',
        link: '/algorithms',
      },
      {
        label: 'Data Structures',
        link: '/data-structures',
      },
    ],
  },
  {
    label: 'Architecture & Basics',
    icon: IconNotes,
    links: [
      { label: 'Software Architecture', link: '/software-architecture' },
      { label: 'Software Patterns', link: '/software-patterns' },
      { label: 'Development Methodologies', link: '/development-methodologies' },
      { label: 'Development Principles', link: '/development-principles' },
      { label: 'CI / CD Techniques', link: '/ci-cd-techniques' },
    ],
  },
  {
    label: 'Cloud Integrations',
    icon: IconLock,
    links: [
      {
        label: 'Authentication Integration',
        link: '/cloud-integration/authentication-integration',
      },
      { label: 'Database Integration', link: '/cloud-integration/database-integration' },
      { label: 'Function Integration', link: '/cloud-integration/function-integration' },
      { label: 'Messaging Integration', link: '/cloud-integration/messaging-integration' },
      { label: 'Payment Integration', link: '/cloud-integration/payment-integration' },
      { label: 'Storage Integration', link: '/cloud-integration/storage-integration' },
    ],
  },
  {
    label: 'Front End Development',
    icon: IconPresentationAnalytics,
    links: [
      { label: 'React Architecture', link: '/frontend-development/react-architecture' },
      { label: 'React Authentiaction', link: '/frontend-development/react-authentication' },
      { label: 'React Cookies & Tokens', link: '/frontend-development/react-cookies-tokens' },
      { label: 'React Custom Hooks', link: '/frontend-development/react-custom-hooks' },
      { label: 'React Error Handling', link: '/frontend-development/react-error-handling' },
      { label: 'React GraphQL', link: '/frontend-development/react-graphql' },
      { label: 'React Nextjs', link: '/frontend-development/react-nextjs' },
      {
        label: 'React Performance Optimization',
        link: '/frontend-development/react-performance',
      },
      { label: 'React State Management', link: '/frontend-development/react-state-management' },
      { label: 'React Testing', link: '/frontend-development/react-testing' },
      { label: 'Responsive Design', link: '/frontend-development/responsive-design' },
      { label: 'Web Accessibility', link: '/frontend-development/web-accessibility' },
    ],
  },
];

export default Routes;
