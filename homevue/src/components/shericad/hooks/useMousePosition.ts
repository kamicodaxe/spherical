// https://dev.to/holdmypotion/react-custom-cursor-no-extra-dependencies-25ki
import { useAtom } from "jotai";
import { useEffect } from "react";
import { mousePositionAtom } from "../atoms";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useAtom(mousePositionAtom)

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}