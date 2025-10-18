import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { logger } from "@/lib/logger";

let s3Client: S3Client | null = null;

function getClient() {
  if (s3Client) return s3Client;
  const region = process.env.S3_REGION;
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
  if (!region || !accessKeyId || !secretAccessKey) {
    logger.warn("S3 credentials missing; returning mocked URLs");
    return null;
  }
  s3Client = new S3Client({ region, credentials: { accessKeyId, secretAccessKey } });
  return s3Client;
}

export async function createPresignedUpload(key: string, contentType: string) {
  const bucket = process.env.S3_BUCKET;
  const client = getClient();
  if (!bucket || !client) {
    return {
      url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/mock-upload/${key}`,
      fields: {}
    };
  }
  const command = new PutObjectCommand({ Bucket: bucket, Key: key, ContentType: contentType });
  const url = await getSignedUrl(client, command, { expiresIn: 3600 });
  return { url, fields: {} };
}
