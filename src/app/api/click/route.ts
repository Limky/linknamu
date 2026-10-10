import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const linkIds = new Set(profile.links.map((link) => link.id));

// 링크별 클릭 수 조회
export async function GET() {
  const collectionPromise = getClicksCollection();
  if (!collectionPromise) {
    return NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다" }, { status: 503 });
  }

  try {
    const docs = await (await collectionPromise).find({ _id: { $in: [...linkIds] } }).toArray();
    const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
    return NextResponse.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패", error);
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다" }, { status: 500 });
  }
}

// 링크 클릭 1회 기록
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const linkId = body?.linkId;

  // profile.ts에 등록된 링크만 허용
  if (typeof linkId !== "string" || !linkIds.has(linkId)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다" }, { status: 400 });
  }

  const collectionPromise = getClicksCollection();
  if (!collectionPromise) {
    return NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다" }, { status: 503 });
  }

  try {
    await (await collectionPromise).updateOne({ _id: linkId }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("클릭 기록 실패", error);
    return NextResponse.json({ error: "클릭을 기록하지 못했습니다" }, { status: 500 });
  }
}
