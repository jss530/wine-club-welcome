import Hero from "../components/Hero.tsx";

const header = 'Hmm - something went wrong.';
const text = 'We were not able to create your account. Please return to the sign up page and try again.';
const btnText = 'Return to Sign Up page';
const url = 'oops-wine.jpg';

export default function OopsPage() {
  return (
    <Hero header={header} text={text} button="true" btnText={btnText} url={url}/>
  );
}
