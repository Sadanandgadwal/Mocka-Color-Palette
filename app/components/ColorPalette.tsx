import React from "react";

type Color = {
  Name: string;
  Hex: string;
  RGB: string;
  HSL: string;
  CMYK: string;
};

type ColorPaletteProps = {
  title: string;
  colors: Color[];
};

const ColorPalette: React.FC<ColorPaletteProps> = ({ title, colors }) => (
  <section className="bg-[#293136ee] p-4 rounded-lg shadow-lg mb-6">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-5 gap-4 text-sm font-medium text-[#cdd6f4] border-b border-[#313244] pb-2 mb-2">
      <div>Color</div>
      <div>Hex</div>
      <div>RGB</div>
      <div>HSL</div>
      <div>CMYK</div>
    </div>
    {colors.map((color) => (
      <div
        key={color.Hex}
        className="grid grid-cols-5 gap-4 py-2 border-b border-[#313244] items-center"
      >
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color.Hex }}
          ></span>
          <span>{color.Name}</span>
        </div>
        <code style={{ color: color.Hex }}>{color.Hex}</code>
        <code style={{ color: color.RGB }}>{color.RGB}</code>
        <code style={{ color: color.HSL }}>{color.HSL}</code>
        <code style={{ color: color.Hex }}>{color.CMYK}</code>
      </div>
    ))}
  </section>
);

export default ColorPalette;
