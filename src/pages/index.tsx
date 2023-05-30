import type { NextPage } from "next";
import Head from "next/head";
import { RandomFox } from "@/components/RandomFox";
import { useState } from "react";
import type { MouseEventHandler } from "react";

const random = () => Math.floor(Math.random() * 123) + 1;

const generateId = () => Math.random().toString(36).substring(2, 15);

type ImageItems = {
  id: string;
  url: string;
};

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<ImageItems>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([...images, newImageItem]);
  };

  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello World 😎!</h1>
        <button onClick={addNewFox}>Add New Fox</button>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <RandomFox image={url} />
          </div>
        ))}
      </main>
      <footer></footer>
    </>
  );
};
export default Home;
