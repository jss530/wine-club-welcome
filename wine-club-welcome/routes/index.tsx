import { Head } from "$fresh/runtime.ts";
import { tw, cx, tx, css, style } from "https://esm.sh/@twind/core@1.1.3";
import { Handlers } from "$fresh/server.ts";

// todo: you may not need this
import { useSignal } from "@preact/signals";
import ColoredButton from "../islands/ColoredButton.tsx";
import Hero from "../components/Hero.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
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
        status: 303, // See Other
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


export default function Home() {
  //todo: remove this and replace with another state or remove completely
  const count = useSignal("password");
  return (
    <>
      <Head>
        <title>Wine Cellar Club</title>
      </Head>

      <Hero/>

      <div class="prose prose-grey grid grid-cols-1 mx-auto gap-4 place-content-center">
        <div class="text-center">
          {/* <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="a wine bottle"
          /> */}
          <p>
            Our cellar is pretty full - but we can fit one more in.
          </p>
          <p>
            Use the form below to create a Wine Cellar Club account. When you're finished filling out the form, click <strong>Join Us</strong> to complete signup.
          </p>
        </div>

        <div class="p-4 mx-auto max-w-screen-md">
          <div class="mt-8 grid grid-cols-1 gap-6 items-start">
            <form method="post" class="sign-up-form grid grid-cols-1 gap-6">
              <label class="block pb-0" for="username">
                <span><strong>Username<span aria-label="required">*</span></strong></span>
                <input 
                  type="text"
                  class="ml-4"
                  id="username" 
                  name="username" 
                  value="" 
                  required
                  maxLength="20"
                  pattern="^[A-Za-z0-9]*$"
                  />
                <p class="text-neutral-500 pt-0 text-xs"><em>Usernames should be max 20 characters and contain letters and numbers only.</em></p>
              </label>

              <label class="block pb-0" for="password">
                <span><strong>Password<span aria-label="required">*</span></strong></span>
                <input
                  type="password" 
                  class="ml-4"
                  id="password" 
                  name="password" 
                  value="" 
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).{8,}"
                />
                <p class="text-neutral-500 pt-0 text-xs"><em>Your password should be a minimum of 8 characters, and contain at least one uppercase letter, one lowercase letter, one number, and one special character.</em></p>
              </label>
              {/* <input type="checkbox" onclick="toggleVisibility()">Show Password</input> */}


              <ColoredButton type="submit">Join Us</ColoredButton>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}
