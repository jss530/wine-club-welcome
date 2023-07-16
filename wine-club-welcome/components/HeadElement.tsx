import { Head } from "$fresh/runtime.ts";

export function HeadElement() {
    return (
        <Head>
            <title>Wine Cellar Club</title>
            <link rel="stylesheet" href="/app.css" />
        </Head>
    );
  }