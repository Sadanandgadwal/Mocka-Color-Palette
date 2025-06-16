"use client";
import React from "react";
import ColorPalette from "./components/ColorPalette";
import {
  peachFuzzColors,
  IcyBreeze,
  SorbetDream,
  BlueberryMilk,
  PastelMochi,
  UnicornMist,
  HoneyRose,
  BlossomBreeze,
  MintBlossom,
} from "../data/colors";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#926441] text-white px-6 py-10 font-sans">
      <h1 className="text-5xl font-bold text-[#ffeddb] mb-4 text-center">
        Mocka Color Palette
      </h1>
      <p className="mb-6 text-[#e3b7a0] text-center">
        Mocka Color consists of 9 beautiful pastel color palettes, named{" "}
        <strong>flavors</strong>.
      </p>

      <ColorPalette title="Peach Fuzz" colors={peachFuzzColors} />
      {/* <ColorPalette title="Sakura Bloom" colors={sakuraBloomColors} /> */}
      <ColorPalette title="Icy Breeze" colors={IcyBreeze} />
      <ColorPalette title="Sorbet Dream" colors={SorbetDream} />
      {/* <ColorPalette title="Lavender Fields" colors={LavenderFields} /> */}
      <ColorPalette title="Blueberry Milk" colors={BlueberryMilk} />
      {/* <ColorPalette title="Tea Garden" colors={TeaGarden} /> */}
      <ColorPalette title="Pastel Mochi" colors={PastelMochi} />
      <ColorPalette title="Unicorn Mist" colors={UnicornMist} />
      <ColorPalette title="Honey Rose" colors={HoneyRose} />
      <ColorPalette title="Blossom Breeze" colors={BlossomBreeze} />
      <ColorPalette title="Mint Blossom" colors={MintBlossom} />
    </main>
  );
}
