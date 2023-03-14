/* eslint-disable no-useless-escape */
import { ListItem, Paragraph, SectionTitle } from '@components';

const FacebookOAuthAPI = (
  <>
    <Paragraph>
      FacebookOAuthAPI is a set of APIs provided by Facebook for integrating Facebook authentication
      and authorization into applications. It allows developers to authenticate users with their
      Facebook accounts and obtain access tokens that can be used to make API calls to the Facebook
      Graph API and other Facebook APIs.
    </Paragraph>

    <Paragraph>
      The FacebookOAuthAPI supports various authentication flows, such as the OAuth 2.0
      authorization code flow and the implicit grant flow, and provides a range of access scopes for
      controlling what actions and data the app can access on behalf of the user.
    </Paragraph>

    <SectionTitle>Features & Use Cases</SectionTitle>

    <ListItem
      itemLabel="Single Sign-On (SSO) with Facebook: "
      itemDescription="Users can log in to your app using their Facebook credentials, eliminating the need for them to create a new account."
    />

    <ListItem
      itemLabel="Social Authentication: "
      itemDescription="Facebook authentication can help increase user trust and engagement by leveraging the social network and user data associated with Facebook accounts."
    />

    <ListItem
      itemLabel="User Data Access: "
      itemDescription="With the appropriate permissions, your app can access a range of user data from Facebook, such as profile information, photos, posts, and friends lists."
    />

    <ListItem
      itemLabel="App Analytics: "
      itemDescription="Facebook provides a range of analytics tools for tracking user engagement and behavior within your app, such as Facebook Login Insights and App Events."
    />

    <SectionTitle>How to Use?</SectionTitle>

    <Paragraph>
      To use the FacebookOAuthAPI, you&apos;ll need to create a Facebook app and obtain an app ID
      and secret key, which you&apos;ll use to authenticate your app with the Facebook API.
      You&apos;ll also need to implement the relevant Facebook authentication flow and obtain access
      tokens for making API calls.
    </Paragraph>
  </>
);

export default FacebookOAuthAPI;
