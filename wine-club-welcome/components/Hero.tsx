export default function Hero() {
  return (
    <div
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style="background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('cellar.jpg');"
    >

      <div class="space-y-4 text-center">
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Join Us</h1>
        <p class="text-xl max-w-lg text-blue-100">
          Become a member of one of the biggest wine cellars in the world.
        </p>
      </div>
    </div>
  );
}
