import ColoredButton from "../islands/ColoredButton.tsx";
interface HeroProps {
  header: string;
  text: string;
  url: string;
  button: boolean;
  btnText: string;
}

const link = '/';

export default function Hero(props: HeroProps) {
  return (
    <div
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style={`background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${props.url});`}
    >

      <div class="space-y-4 text-center">
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">{props.header}</h1>
        <p class="text-xl max-w-lg text-blue-100 mx-auto">
          {props.text}
        </p>
      </div>

      {props.button ? 
        <a href={`${link}`}><ColoredButton>{props.btnText}</ColoredButton></a> :
        ""
      }
    </div>
  );
}
