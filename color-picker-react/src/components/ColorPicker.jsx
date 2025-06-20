import iro from "@jaames/iro";
import React, { useEffect, useRef } from "react";

export default function ColorPicker({ onColorChange }) {
  const colorPickerRef = useRef(null);
  const colorRef = useRef(null); // store the iro.ColorPicker instance

  useEffect(() => {
    // initialize the color picker

    if (!colorRef.current) {
      colorRef.current = new iro.ColorPicker(colorPickerRef.current, {
        width: 250,
        color: "#f00",
      });
    }

    // listen for color changes
    colorRef.current.on("color:change", (color) => {
      onColorChange(color.hexString);
    });
  }, [onColorChange]);

  return <div ref={colorPickerRef}></div>;
}
