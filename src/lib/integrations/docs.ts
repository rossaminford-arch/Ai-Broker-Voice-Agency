export async function issueDocLinks(_contact: any, checklist: string[]) {
  // TODO: generate pre-signed S3 links or a secure upload page
  return checklist.map((c, i) => ({ item: c, url: `https://example.com/upload/${i}` }));
}
