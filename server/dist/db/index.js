import mongoose from 'mongoose';
export const connectDB = async () => {
    let DB_CONNECTION_STRING = "";
    try {
        if (process.env.NODE_ENV == "development") {
            DB_CONNECTION_STRING = process.env.MONGO_LOCAL_DB;
        }
        if (process.env.NODE_ENV == "production") {
            DB_CONNECTION_STRING = process.env.MONGO_SERVER_DB;
        }
        const dbResponse = await mongoose.connect(DB_CONNECTION_STRING);
        console.log("DB Connect is Successfully", dbResponse.connection.host);
    }
    catch (error) {
        console.log("The DB connection error", error);
        process.exit(1);
    }
};
//# sourceMappingURL=index.js.map