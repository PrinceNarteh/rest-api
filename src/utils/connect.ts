import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("DB connected successfully!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connect;
