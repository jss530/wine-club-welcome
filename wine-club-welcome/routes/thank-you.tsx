import Hero from "../components/Hero.tsx";

const header = 'Welcome.';
const text = 'Thanks for signing up. Come on in.';
const btnText = 'Enter Cellar';
const url = 'welcome-wine.jpg'

export default function ThankYouPage() {
  return (
    <Hero header={header} text={text} button="true" btnText={btnText} url={url}/>
  );
}
