import ColoredButton from "../islands/ColoredButton.tsx";

export default function OopsPage() {
  return (
    <main>
      <h1>Hmm - something went wrong.</h1>
      <p>We were not able to create your account. Please return to the sign up page and try again.</p>
      <ColoredButton>Return to Sign Up page</ColoredButton>
    </main>
  );
}
