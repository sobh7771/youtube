import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get("searchTerm");

  if (!searchTerm) {
    return NextResponse.json(
      {
        error: "searchTerm is required",
      },
      { status: 400 },
    );
  }

  const res = await fetch(
    `https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=${searchTerm}`,
  );
  const str = await res.text();
  const arr = JSON.parse(str.substring(str.indexOf("["), str.indexOf("])") + 1));
  let suggestionsTuple: [string, number, number[]][] = [];

  if (Array.isArray(arr) && Array.isArray(arr.at(1))) {
    suggestionsTuple = arr.at(1);
  }

  const suggestions = suggestionsTuple
    .flatMap((suggestion) => suggestion)
    .filter((suggestion) => typeof suggestion === "string");

  return NextResponse.json(suggestions);
}
