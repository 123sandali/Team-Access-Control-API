import express from "express"
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express(); 

//cors config
app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",

        methods:[
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
        ],

        allowedHeaders:[
            "Content-Type",
            "Authorization"
        ]
    })
)
//body parser middleware
app.use(express.json());
//url extended parser middleware that allows parsing of URL-encoded data with the querystring library
app.use(express.urlencoded({extended:true}));

// app.get("/welcome",(req,res)=>{
//     res.send("Welcome to the Team Access Control API");
// });

//user auth-routes
app.use("/api/auth", authRoutes);




export default app;