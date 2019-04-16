import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const s3Object = await Storage.vault.put(filename, file, {
    contentType: file.type
  });

  return s3Object.key;
}


