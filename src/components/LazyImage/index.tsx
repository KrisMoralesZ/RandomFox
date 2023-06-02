import { type } from "os";
import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

type LazyImageProps = {
  src: string;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const [currentSrc, setCurrentSrc] = useState("");
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // new observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // onIntersection
        if (entry.isIntersecting) {
          setCurrentSrc(currentSrc);
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
  }, [src]);
  return <img ref={ref} src={src} {...imgProps} />;
};
