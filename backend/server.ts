import express, { Express, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import cookieSession from 'cookie-session';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

var corsOptions: CorsOptions = {
  origin: 'http://localhost:3501'
};

app.use(cors(corsOptions));

// application/json requests
app.use(express.json());

// application/x-www-form-urlencoded requests
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: 'chat-session',
    secret: process.env.COOKIE_SECRET,
    httpOnly: true
  })
)

// Test route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: "connected" });
});

// Declare and listen for requests on port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🐙[server]: Server is running at http://localhost:${PORT}`);
});

