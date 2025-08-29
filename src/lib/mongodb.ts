import mongoose from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "⚠️ Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let isConnected = false; // Track connection as boolean

export async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      // These options are no longer required in Mongoose 6+
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    // ✅ Convert readyState (enum) to boolean
    isConnected = db.connections[0].readyState === 1;

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
