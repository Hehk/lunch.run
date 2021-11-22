import Head from "next/head";
import me from "../public/me_and_reg.jpg";
import { useState } from "react";

type Loading =
  | 'start'
  | 'long-load'
  | 'none'

const loadingText = (loading: Loading) => {
  switch (loading) {
    case 'start': return 'Loading...'
    case 'long-load': return 'Creating a new map, this can take a ~30s'
    case 'none': return 'Get GPX!'
  }
}

export default function Gilbert() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState<Loading>('none');
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const fetchGPX = async () => {
    setLoading('start');
    // TODO timeout mostly works but this could be more detailed
    const timeout = setTimeout(() => {
      setLoading('long-load')
    }, 1500)

    try {
      const response = await fetch(
        "https://us-central1-gilbert-gps.cloudfunctions.net/function-1",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            map: input,
          }),
        }
      );
      if (response.status !== 200) {
        throw new Error(await response.text());
      }

      const link = await response.text();
      setLink(link);
    } catch (e) {
      console.error(e);
      setError(e.message);
    } finally {
      setLoading('none');
      clearTimeout(timeout)
    }
  };

  const submit = (e : React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (loading !== 'none') return;
    fetchGPX();
  };


  return (
    <div>
      <Head>
        <title>Gilbert GPS</title>
        <meta name="description" content="Get GPS data from Gilbert's maps" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form
          className="m-auto w-full bg-white p-5 md:p-8 max-w-md col-start-2 col-span-2"
          onSubmit={submit}
        >
          <h1 className="mb-4 text-xl">
            Convert Gilbert&apos;s maps into GPX files
          </h1>
          <input
            className="w-full px-6 py-3.5 rounded-lg border border-gray-200 shadow-sm appearance-none focus:outline-none focus:ring focus:border-blue-400 md:text-lg mb-4"
            type="text"
            value={input}
            placeholder="link"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="w-full px-8 py-3.5 transition duration-300 bg-blue-500 hover:bg-blue-600 shadow text-white font-semibold rounded-lg mb-4 text-left"
            type="submit"
            onClick={submit}
          >
            {loadingText(loading)}
          </button>
          {link ? (
            <a
              className="block w-full px-8 py-3.5 transition duration-300 bg-indigo-500 hover:bg-indigo-600 shadow text-white font-semibold rounded-lg"
              href={link}
              download
              type="application/xml"
            >
              GPX File! <span className="float-right">▼</span>
            </a>
          ) : null}


          {error ? <div className="bg-red-500 rounded-lg px-8 py-3.5 text-white">
            <p>Error: {error}</p>
            <br />
            <p>If this persists, please bug me! I am the <a href={me.src} className="underline">young guy with long hair.</a></p>
            </div> : null}
        </form>
      </main>
    </div>
  );
}
