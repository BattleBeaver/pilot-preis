import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function POST() {
  // let browser;
  // try {
  //   // Launch a new browser instance
  //   browser = await puppeteer.connect({
  //     browserWSEndpoint: "http://188.68.52.244:80",
  //   });

  //   // Create a new page
  //   const page = await browser.newPage();
  //   await page.setViewport({ width: 1920, height: 1080 });

  //   // Navigate to a page (example: Lidl deals)
  //   await page.goto("https://www.lidl.de/c/lidl-deals-des-tages/s10015619", {
  //     waitUntil: "networkidle0", // Wait until network is idle
  //   });

  //   // Get the page content
  //   const html = await page.content();

  //   // Close the browser
  //   await browser.close();

  //   // Return a successful response
  //   return NextResponse.json({ success: true, data: html });
  // } catch (error) {
  //   console.error("Error handling request:", error);
  //   if (browser) await browser.close(); // Clean up on error
  //   return NextResponse.json(
  //     { success: false, error: "Unable to process request" },
  //     { status: 500 }
  //   );
  // }

  const response = await fetch(
    "https://www.lidl.de/c/lidl-deals-des-tages/s10015619"
  );
  const html = await response.text();
  return NextResponse.json({ success: true, data: html });
}
