import { useRef, useEffect, useState } from "react";

export type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
  const [src, setSrc] = useState("");
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // new observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // onIntersection
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });

    //observe ref
    if (ref.current) {
      observer.observe(ref.current);
    }

    //disconect
    return () => {
      observer.disconnect();
    };
  }, [image]);
  return (
    <img ref={ref} src={src} width={320} height="auto" className="rounded" />
  );
};
