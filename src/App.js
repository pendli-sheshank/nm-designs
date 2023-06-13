import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <nav>
      <span>Hello {user.username}</span>
      <button onClick={signOut}>Sign out</button>
    </nav>
  );
}

export default withAuthenticator(App);
