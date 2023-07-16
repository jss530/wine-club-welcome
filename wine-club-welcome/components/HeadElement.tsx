import { Head } from "$fresh/runtime.ts";

export function HeadElement() {
    return (
        <Head>
            <title>Wine Cellar Club</title>
            <link rel="icon" type="image/x-icon" href="logo.svg" />
            <link rel="stylesheet" href="/app.css" />
        </Head>
    );
  }