import Head from "next/head";
import Container from "../components/container";
import { useState } from "react";

export default function Gilbert() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const fetchGPX = async () => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  const submit = () => {
    if (loading) return;
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
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            submit();
          }}
        >
          <h1 className="mb-4 text-xl">
            Convert Gilbert's maps into GPX files
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
            {loading ? "loading" : "Make GPX"}
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
        </form>

        {error ? <span>{error}</span> : null}
      </main>
    </div>
  );
}
