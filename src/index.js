import {connectDB,disconnectDB} from "./config/database.js";
import app from "./app.js"

const startServer = async ()=> {
    try{
        console.log("Connecting to Postgres...");
        await connectDB();
        console.log("Postgres URI starts with:", process.env.DATABASE_URL?.slice(0, 15));
        
        app.on("error",(error)=>{
            console.log(error);
            throw error;
        });

        const port = process.env.PORT || 8000;

        app.listen(port, ()=>{
            console.log(`Server running on port ${port}`);
        });
        //handle unhandled promise rejections
        process.on("unhandledRejection",(error)=>{
            console.log("Unhandled Rejection:", error);
            server.close(async ()=>{
            await disconnectDB();
            process.exit(1);
            });
        });
    }
    catch(error){
        console.log(error);
    }
}
startServer();