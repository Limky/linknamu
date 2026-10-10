import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

// 개발 모드의 핫 리로드 때마다 새 연결이 생기지 않도록 전역에 캐시
const globalForMongo = globalThis as unknown as { _mongoClientPromise?: Promise<MongoClient> };

export function getClicksCollection() {
  // MONGODB_URI가 없으면 null을 반환해 클릭 집계만 비활성화
  if (!uri) return null;

  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }

  return globalForMongo._mongoClientPromise.then((client) =>
    client.db(process.env.MONGODB_DB ?? "linknamu").collection<{ _id: string; count: number }>("clicks"),
  );
}
