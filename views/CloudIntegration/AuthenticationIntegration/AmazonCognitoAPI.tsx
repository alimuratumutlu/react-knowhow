/* eslint-disable no-useless-escape */
import { CodeBlock, ListItem, Paragraph, SectionTitle } from '@components';

const AmazonCognito = (
  <>
    <Paragraph>
      Amazon Cognito API is a cloud-based authentication, authorization, and user management service
      provided by Amazon Web Services (AWS). It enables developers to add user sign-up, sign-in, and
      access control to web and mobile applications, as well as manage user profiles and data.
    </Paragraph>

    <SectionTitle>Features</SectionTitle>

    <ListItem
      itemLabel="User sign-up and sign-in: "
      itemDescription="Cognito allows users to sign up and sign in to your application using different identity providers, such as Facebook, Google, and Amazon."
    />
    <ListItem
      itemLabel="User profile management: "
      itemDescription="Cognito allows you to manage user profiles and user data, such as user preferences, email addresses, phone numbers, and more."
    />
    <ListItem
      itemLabel="Access control: "
      itemDescription="Cognito allows you to define and enforce access control policies for your application, and authenticate and authorize users based on their roles and permissions."
    />
    <ListItem
      itemLabel="Multi-factor authentication (MFA): "
      itemDescription="Cognito supports MFA, which provides an additional layer of security to verify a user's identity."
    />
    <ListItem
      itemLabel="Social identity provider integration: "
      itemDescription="Cognito allows you to integrate with social identity providers, such as Facebook and Google, to enable users to sign up and sign in using their social media accounts."
    />
    <ListItem
      itemLabel="Custom authentication: "
      itemDescription="Cognito allows you to implement custom authentication flows and integrate with your own identity provider or backend authentication service."
    />

    <Paragraph>
      The Amazon Cognito API provides a RESTful API and SDKs for several programming languages,
      including JavaScript, Java, .NET, and more, which makes it easy for developers to integrate
      Cognito into their applications.
    </Paragraph>

    <SectionTitle>How to Use?</SectionTitle>

    <Paragraph>
      We can connect Amazon Cognito API with our React App using the AWS Amplify library:
    </Paragraph>

    <Paragraph>1. We must firstly install the AWS Amplify Library</Paragraph>
    <CodeBlock>npm install aws-amplify aws-amplify-react</CodeBlock>

    <Paragraph>2. We create a config file for AWS</Paragraph>
    <CodeBlock>
      {`// Path: src/aws-exports.js
export default {
  Auth: {
    region: 'XX-XXXX-X',
    userPoolId: 'XX-XXXX-X_abcd1234',
    userPoolWebClientId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
  },
};`}
    </CodeBlock>

    <Paragraph>3. We configure the Amplify library with our Cognito user pool:</Paragraph>
    <CodeBlock>
      {`import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);`}
    </CodeBlock>

    <Paragraph>4. We create a sign-up form component in our React app:</Paragraph>
    <CodeBlock>
      {`import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
      
function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
      
  const handleSubmit = async (event) => {
  event.preventDefault();
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      }); 
    console.log('User signed up:', user);
    } 
    catch (error) {
        console.log('Error signing up:', error);
    }
  };
      
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
      
export default SignUpForm;`}
    </CodeBlock>
    <Paragraph>
      This component uses the Auth object from the Amplify library to sign up a user with the
      specified username, password, and email address. It also logs the user object if the sign-up
      is successful, or logs an error if the sign-up fails.
    </Paragraph>
    <Paragraph>5. We render the sign-up form component in our React app::</Paragraph>
    <CodeBlock>
      {`import React from 'react';
import SignUpForm from './SignUpForm';

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
  );
}

export default App;
      `}
    </CodeBlock>
    <Paragraph>
      That&apos;s it! We&apos;ve now connected Amazon Cognito API with our React app using the AWS
      Amplify library. Note that this is just a basic example, and we&apos;ll need to customize it
      to fit our specific use case. Also, make sure to secure our Cognito user pool and follow best
      practices for user authentication and authorization.
    </Paragraph>
  </>
);

export default AmazonCognito;
