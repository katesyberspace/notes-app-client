export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "syberspace.notes-app-bucket"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://5tml75irw4.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_FDwOuzTbv",
    APP_CLIENT_ID: "29a93k90mtjr6i8949jnt9qime",
    IDENTITY_POOL_ID: "us-east-1:9aca8630-7d02-4a18-80a1-1f9b2ac87c42"
  }
};