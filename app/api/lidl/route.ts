import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export async function POST() {
  const response = await fetch(
    "https://www.lidl.de/c/lidl-deals-des-tages/s10015619"
  );
  const html = await response.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const productLinks = document.querySelectorAll(".OdsTileGrid");
  console.log(productLinks);

  // const products = Array.from(productLinks).map((link) => {
  //   return {
  //     title: link.textContent,
  //   };
  // });

  return NextResponse.json({ success: true, data: productLinks });
}
