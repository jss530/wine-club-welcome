import { Handlers } from "$fresh/server.ts";
import ColoredButton from "../islands/ColoredButton.tsx";
import Hero from "../components/Hero.tsx";
import { HeadElement } from "../components/HeadElement.tsx";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    const username = form.get("username")?.toString();
    const password = form.get("password")?.toString();

    const resp = await fetch('https://signup-api.deno.dev/', {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      }
    });

    if (resp.status === 200) {
      const headers = new Headers();
      headers.set("location", "/thank-you");
      return new Response(null, {
        status: 303,
        headers,
      });
    } else {
      const headers = new Headers();
      headers.set("location", "/oops");
      return new Response(null, {
        status: 303,
        headers,
      });
    }
  },
};

const header = 'Join Us';
const text = 'Become a member of one of the biggest wine cellars in the world.';
const url = 'cellar.jpg';

export default function Home() {
  return (
    <>
      <HeadElement />

      <Hero header={header} text={text} url={url} button="false"/>

      <div class="prose prose-grey grid grid-cols-1 mx-auto mb-16 place-content-center w-5/6">
        <div class="text-center">
          <p>
            Our cellar is pretty full - but we can fit one more in.
          </p>
          <p>
            Use the form below to create a Wine Cellar Club account. When you're finished filling out the form, click <strong>Join Us</strong> to complete signup.
          </p>
        </div>

        <div class="mx-auto">
          <div class="mt-8 grid grid-cols-1 gap-6 items-start">
            <form method="post" class="sign-up-form grid grid-cols-1 gap-6">
              <label class="block pb-0" for="username">
                <span><strong>Username<span aria-label="required">*</span></strong></span>
                <input 
                  type="text"
                  class="ml-4"
                  id="username" 
                  name="username" 
                  maxLength="20"
                  pattern="^[A-Za-z0-9]*$"   
                  placeholder="Create a username"
                  required
                  value="" 
                />
                <p class="text-neutral-500 pt-0 text-xs"><em>Usernames should be max 20 characters, and contain letters and numbers only.</em></p>
              </label>

              <label class="block pb-0" for="password">
                <span><strong>Password<span aria-label="required">*</span></strong></span>
                <input
                  type="password" 
                  class="ml-4"
                  id="password" 
                  minLength="8"
                  name="password" 
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$"
                  placeholder="Create a password"
                  required
                  value=""
                />
                <p class="text-neutral-500 pt-0 text-xs"><em>Your password should be a minimum of 8 characters, and contain at least one uppercase letter, one lowercase letter, one number, and one special character. Please do not include spaces.</em></p>
              </label>
              <ColoredButton type="submit" onClick={() => (handler)}>Join Us</ColoredButton>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}
