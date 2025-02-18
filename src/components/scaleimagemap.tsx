import React from "react";
import { useEffect, useRef } from "react";

const ScaleImageMap: React.FC<React.PropsWithChildren> = ({ children }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const mapRef = useRef<HTMLMapElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    const map = mapRef.current;
    if (!img || !map) return;

    const areas = map.getElementsByTagName("area");

    const originalCoords = Array.from(areas).map((area) =>
      area.coords.split(",").map(Number)
    );

    function scaleImageMap() {
      if (!img || !map) return;

      const scaleX = img.clientWidth / img.naturalWidth;
      const scaleY = img.clientHeight / img.naturalHeight;

      for (let i = 0; i < areas.length; i++) {
        const area = areas[i];
        const coords = originalCoords[i];

        if (area && coords) {
          const scaledCoords = coords.map((coord, idx) =>
            idx % 2 === 0
              ? Math.round(coord * scaleX)
              : Math.round(coord * scaleY)
          );
          area.coords = scaledCoords.join(",");
        }
      }
    }

    scaleImageMap();
    window.addEventListener("resize", scaleImageMap);

    return () => {
      window.removeEventListener("resize", scaleImageMap);
    };
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === "img") {
            return React.cloneElement(child, { ref: imgRef } as React.RefAttributes<HTMLImageElement>);
          } else if (child?.type === "map") {
            return React.cloneElement(child, { ref: mapRef } as React.RefAttributes<HTMLMapElement>);
          }
        }
        return child;
      })}
    </>
  );
};

export default ScaleImageMap;
