/* eslint-disable no-useless-escape */
import { CodeBlock, ListItem, Paragraph, SectionTitle } from '@components';

const AmazonIAMAPI = (
  <>
    <Paragraph>
      Amazon IAM API is a cloud-based Identity and Access Management (IAM) service provided by
      Amazon Web Services (AWS). It allows developers to manage access to AWS resources by creating
      and managing IAM users, groups, and roles, and by assigning permissions to these entities
      using IAM policies.
    </Paragraph>

    <SectionTitle>Features</SectionTitle>

    <ListItem
      itemLabel="User and group management"
      itemDescription="IAM allows you to create and manage IAM users and groups, and to assign permissions to these entities using IAM policies."
    />

    <ListItem
      itemLabel="Role management"
      itemDescription="IAM allows you to create and manage IAM roles, which define a set of permissions that can be assumed by trusted entities, such as AWS services or IAM users."
    />

    <ListItem
      itemLabel="Permission management"
      itemDescription="IAM allows you to create and manage IAM policies, which define the permissions that are granted or denied to IAM users, groups, and roles."
    />

    <ListItem
      itemLabel="Multifactor authentication (MFA)"
      itemDescription="IAM supports MFA, which provides an additional layer of security to verify the identity of IAM users."
    />

    <ListItem
      itemLabel="Integration with AWS services"
      itemDescription="IAM integrates with many AWS services, such as Amazon S3, Amazon EC2, and AWS Lambda, to provide granular access control to these services."
    />

    <SectionTitle>How to Use?</SectionTitle>

    <Paragraph>
      To use Amazon IAM API, you need to create an IAM user and an IAM policy. The IAM user is the
      entity that will be used to access the AWS resources. The IAM policy defines the permissions
      that are granted or denied to the IAM user. The IAM user and the IAM policy are created using
      the AWS Management Console, AWS CLI, or AWS SDKs.
    </Paragraph>

    <Paragraph>
      The Amazon IAM API provides a programmatic interface for managing IAM users, groups, roles,
      and policies using RESTful API calls or SDKs for various programming languages, such as
      JavaScript, Java, .NET, and more.
    </Paragraph>

    <Paragraph>
      While you can&apos;t directly integrate your React app with the Amazon IAM API, you can use
      the AWS Amplify library to manage authentication and access control for your app.
    </Paragraph>

    <Paragraph>
      Here&apos;s a general outline of the steps you can take to integrate your React app with AWS
      Amplify and Amazon IAM:
    </Paragraph>

    <Paragraph>1. Install the AWS Amplify library:</Paragraph>
    <CodeBlock>npm install aws-amplify aws-amplify-react</CodeBlock>

    <Paragraph>
      2. We create a config file for AWS. The awsconfig object should include your AWS credentials
      and the configuration for your Cognito user pool.
    </Paragraph>

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

    <Paragraph>
      3. Configure the Amplify library with your AWS credentials and Cognito user pool:
    </Paragraph>
    <CodeBlock>
      {`import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);`}
    </CodeBlock>

    <Paragraph>
      4. Use the Auth object from the Amplify library to manage authentication and authorization in
      your React app:
    </Paragraph>

    <CodeBlock>
      {`import { Auth } from 'aws-amplify';

// Sign up a new user
Auth.signUp({
  username: 'testuser',
  password: 'Test123!',
  attributes: {
    email: 'testuser@example.com',
  },
});

// Sign in a user
Auth.signIn('testuser', 'Test123!');

// Sign out the current user
Auth.signOut();

// Get the current authenticated user
const user = await Auth.currentAuthenticatedUser();

// Check if the current user is an admin
const userGroups = user.signInUserSession.accessToken.payload['cognito:groups'];
const isAdmin = userGroups.includes('Admin');`}
    </CodeBlock>

    <Paragraph>
      In this example, we&apos;re using the Auth object from the Amplify library to sign up a new
      user, sign in an existing user, sign out the current user, and get the current authenticated
      user. We&apos;e also checking if the current user belongs to the &apos;Admin&apos; group using
      the cognito:groups attribute.
    </Paragraph>
    <Paragraph>
      By using the Auth object, you can manage authentication and authorization in your React app
      and interact with the Amazon IAM service behind the scenes.
    </Paragraph>
  </>
);

export default AmazonIAMAPI;
