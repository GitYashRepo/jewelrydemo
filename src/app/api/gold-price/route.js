import { NextResponse } from "next/server";

const GOLD_API = "https://api.gold-api.com/price/XAU";
const FX_API = "https://api.exchangerate-api.com/v4/latest/USD";

export async function GET() {
  try {
    // 1️⃣ Fetch gold price in USD per ounce (24K)
    const goldRes = await fetch(GOLD_API, {
      next: { revalidate: 600 }, // 10 minutes
    });
    if (!goldRes.ok) throw new Error("Gold API failed");
    const goldData = await goldRes.json();

    // 2️⃣ Fetch USD → INR rate
    const fxRes = await fetch(FX_API, {
      next: { revalidate: 600 }, // 10 minutes
    });
    if (!fxRes.ok) throw new Error("FX API failed");
    const fxData = await fxRes.json();

    const goldUsdPerOunce = Number(goldData.price);
    const usdToInr = Number(fxData.rates?.INR);

    if (!goldUsdPerOunce || !usdToInr) {
      throw new Error("Invalid gold or FX data");
    }

    // 3️⃣ Convert to INR
    const goldInrPerOunce = goldUsdPerOunce * usdToInr;

    // 1 troy ounce = 31.1035 grams
    const goldInrPerGram = goldInrPerOunce / 31.1035;

    // Indian standard display
    const gold24KPer10Gram = goldInrPerGram * 10;

    // Optional: India market premium (GST + import + bullion spread)
    const INDIA_PREMIUM = 1.0985; // ~8%
    const gold24KIndiaMarket = gold24KPer10Gram * INDIA_PREMIUM;

    return NextResponse.json({
      carat: "24K",
      spotPricePerGram: goldInrPerGram.toFixed(2),
      spotPricePer10Gram: gold24KPer10Gram.toFixed(0),
      indiaMarketPricePer10Gram: gold24KIndiaMarket.toFixed(0),
      currency: "INR",
      updatedAt: goldData.updatedAt,
    });

  } catch (error) {
    console.error("Gold price fetch failed:", error);
    return NextResponse.json(
      { error: "Unable to fetch gold price" },
      { status: 500 }
    );
  }
}
