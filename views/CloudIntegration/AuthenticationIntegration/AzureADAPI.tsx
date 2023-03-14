/* eslint-disable no-useless-escape */
import { CodeBlock, ListItem, Paragraph, SectionTitle } from '@components';

const AzureActiveDirectory = (
  <>
    <Paragraph>
      Azure Active Directory (Azure AD) is a cloud-based identity and access management service
      provided by Microsoft, which offers a set of APIs for developers to integrate authentication
      and authorization capabilities into their applications.
    </Paragraph>

    <Paragraph>
      The Azure AD APIs allow developers to authenticate users, obtain tokens, manage users and
      groups, and protect resources using various protocols and standards, such as OAuth 2.0, OpenID
      Connect, and SAML.
    </Paragraph>

    <SectionTitle>Key Azure AD API Categories and Services</SectionTitle>

    <ListItem
      itemLabel="Authentication and Authorization"
      itemDescription="
      Authentication and Authorization: Azure AD offers a range of authentication and authorization
      capabilities, including multi-factor authentication, conditional access, and identity
      protection. The Azure AD Authentication Library (ADAL) and Microsoft Authentication Library
      (MSAL) are two key APIs for integrating Azure AD authentication into applications."
    />

    <ListItem
      itemLabel="User and Group Management"
      itemDescription="The Azure AD Graph API allows developers to manage users, groups,
      and other directory objects in Azure AD, such as creating, deleting, updating, and querying
      users and groups."
    />

    <ListItem
      itemLabel="Application Management"
      itemDescription="The Azure AD Application Proxy allows developers to securely publish
      on-premises web applications for external access, while the Azure AD App Registration API
      enables developers to manage their application registrations in Azure AD."
    />

    <ListItem
      itemLabel="Security and Compliance: "
      itemDescription="
      Azure AD provides a range of security and compliance features, such
      as threat intelligence, audit logs, and compliance reporting. The Azure AD Identity Protection
      API allows developers to monitor and mitigate potential identity risks in real-time."
    />

    <SectionTitle>How to Use?</SectionTitle>

    <Paragraph>
      To integrate a React app with Azure Active Directory, you can use the Microsoft Authentication
      Library (MSAL) for JavaScript. Here&apos;s a high-level overview of the steps involved:
    </Paragraph>

    <ListItem
      itemLabel="1. "
      itemDescription="Register your app in Azure AD and obtain the app ID and redirect URI."
    />

    <ListItem
      itemLabel="2. "
      itemDescription="Install the MSAL library in your React app using a package manager like npm or yarn."
    />

    <ListItem
      itemLabel="3. "
      itemDescription="Configure the MSAL instance with your app ID and redirect URI, and initialize it."
    />

    <ListItem
      itemLabel="4. "
      itemDescription="Use the MSAL APIs to handle authentication and obtain access tokens for the APIs you want to call."
    />

    <ListItem
      itemLabel="5. "
      itemDescription="Use the access tokens to call your APIs and retrieve data."
    />

    <CodeBlock>
      {`import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "YOUR_APP_ID",
        authority: "https://login.microsoftonline.com/YOUR_TENANT_ID",
        redirectUri: "http://localhost:3000",
    },
};

const msalInstance = new PublicClientApplication(msalConfig);

const scopes = ["user.read"]; // Scopes for the access token

// Login function to authenticate the user
const login = async () => {
  try {
    // Prompt the user to sign in
    const authResult = await msalInstance.loginPopup({
      scopes,
    });

    // Get the access token for the requested scopes
    const accessToken = authResult.accessToken;

    // Call your API with the access token
    const response = await fetch("https://your-api.com", {
      headers: {
        Authorization: 'Bearer $ {accessToken}',
      },
    });

    // Process the response data
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Logout function to sign out the user
const logout = () => {
  msalInstance.logout();
};

// Use the login and logout functions in your React components
function App() {
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
      `}
    </CodeBlock>

    <Paragraph>
      {' '}
      In this example, we first import the PublicClientApplication class from the MSAL library and
      define the msalConfig object with the app ID, authority, and redirect URI. We then create a
      new PublicClientApplication instance with this config and define the desired scopes for the
      access token.
    </Paragraph>

    <Paragraph>
      We then define a login function that prompts the user to sign in using the loginPopup method
      of the MSAL instance, and obtains an access token for the requested scopes. We use this access
      token to call an API and retrieve the response data.
    </Paragraph>

    <Paragraph>
      Finally, we define a logout function that signs the user out using the logout method of the
      MSAL instance, and use the login and logout functions in our React components.
    </Paragraph>
  </>
);

export default AzureActiveDirectory;
