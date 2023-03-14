/* eslint-disable no-useless-escape */
import { CodeBlock, ListItem, Paragraph, SectionTitle } from '@components';

const FirebaseAuthentication = (
  <>
    <Paragraph>
      Firebase Authentication API is a cloud-based authentication service provided by Google that
      allows developers to add authentication and authorization features to their web and mobile
      applications.
    </Paragraph>
    <Paragraph>
      Firebase Authentication enables users to sign up for and log in to applications using their
      email and password, phone number, social media accounts, or other identity providers.
      Additionally, you can enhance security during the authentication process by using verification
      factors such as SMS verification codes or email verification links.
    </Paragraph>
    <Paragraph>
      The Firebase Authentication API uses the Firebase SDK to add authentication functionality to
      your application. Firebase Authentication works based on open standards such as OAuth 2.0 and
      OpenID Connect, and integrates Firebase user accounts with other Google services.
    </Paragraph>
    <SectionTitle>How to Integrate with React?</SectionTitle>
    <Paragraph>
      To integrate a React app with Firebase Authentication API, you&apos;ll need to follow these
      steps:
    </Paragraph>
    <Paragraph strong>
      1. Create a Firebase project and enable Firebase Authentication in the Firebase console.
    </Paragraph>
    <Paragraph>
      <ListItem itemLabel="1.1 " itemDescription="Sign in to the Firebase console." />
      <ListItem
        itemLabel="1.2 "
        itemDescription="Create a new Firebase project, or select an existing one."
      />
      <ListItem
        itemLabel="1.3 "
        itemDescription='In the left-hand menu, click on the "Authentication" option to open the Firebase Authentication page.'
      />
      <ListItem
        itemLabel="1.4 "
        itemDescription="On the Firebase Authentication page, you'll see a list of sign-in methods that you can enable for your app. Choose the sign-in methods that you want to use, such as email and password, Google, Facebook, or others, and click on the corresponding option to enable it."
      />
      <ListItem
        itemLabel="1.5 "
        itemDescription="Follow the instructions to set up each sign-in method. For example, if you're enabling Google sign-in, you'll need to create a Google Cloud Platform project and configure the OAuth consent screen and credentials."
      />
      <ListItem
        itemLabel="1.6 "
        itemDescription="Once you've enabled the sign-in methods that you want to use, you can customize the authentication settings for your app. For example, you can configure password policies, email templates, and multi-factor authentication."
      />
    </Paragraph>
    <Paragraph strong>
      2. Install the Firebase SDK for JavaScript and the Firebase Authentication SDK in your React
      app using a package manager like npm or yarn.
    </Paragraph>
    <CodeBlock>npm install firebase</CodeBlock>
    <CodeBlock>npm install firebase/auth</CodeBlock>
    <Paragraph strong>
      3. Initialize the Firebase SDK in your app by creating a Firebase configuration object and
      passing it to the initializeApp function.
    </Paragraph>
    <CodeBlock>
      {`import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

firebase.initializeApp(firebaseConfig);`}
    </CodeBlock>
    <Paragraph strong>
      4. Use the Firebase Authentication APIs to handle authentication in your React components. For
      example, you can use the signInWithPopup method to open a pop-up window for the user to sign
      in with their Google account.
    </Paragraph>
    <CodeBlock>
      {`import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);
    setUser(user);
  };

  const signOut = async () => {
    await firebase.auth().signOut();
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in to continue.</p>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      )}
    </div>
  );
}`}
    </CodeBlock>
    <Paragraph>
      In this example, we first import the useState hook and the Firebase and Firebase
      Authentication modules. We then define a user state variable and two functions for signing in
      with Google and signing out.
    </Paragraph>
    <Paragraph>
      We use the signInWithPopup method of the Firebase Authentication SDK to initiate the Google
      sign-in flow in a pop-up window. Once the user signs in, we update the user state variable to
      display a personalized welcome message and a sign-out button. Finally, we use the signOut
      method of the Firebase Authentication SDK to sign the user out and update the user state
      variable to display the sign-in options again.
    </Paragraph>
  </>
);

export default FirebaseAuthentication;
