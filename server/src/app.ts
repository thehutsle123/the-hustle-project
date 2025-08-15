import express, { type Request, type Response } from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt'
import { userList } from '../storage/auth/user';


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/login', async (req: Request, res: Response) => {
	const { email, password }: { email: string, password: string } = req.body;

	!email || !password ? res.status(400).json({ message: "Email and/or password is empty" }) : null

	//Find if user exists 
	const foundUser = userList.find(user => email === user.email);
	if (!foundUser) { res.status(422).json("User does not exist") }

	res.status(200).json({
		data: foundUser
	})
});


app.post('sign-up', async (req: Request, res: Response) => {
	const { email, password, username, fname, mname, lname }: { email: string, password: string, username: string, fname: string, mname?: string, lname: string } = req.body;

	// Check if user already exists
	const emailExists = userList.some(user => email === user.email);
	const usernameExists = userList.some(user => username === user.username);

	if (emailExists) {
		return res.status(422).json("Email already exists");
	}

	if (usernameExists) {
		return res.status(422).json("Username already exists");
	}

	// Hash password before saving (crucial for security)
	const hashedPassword = await bcrypt.hash(password, 12);

	const newUser = {
		id: userList.length + 1, // Generate a unique ID
		email,
		password: hashedPassword,
		username,
		fname,
		mname,
		lname
	};

	userList.push(newUser);

	return res.status(201).json(newUser);
});


const port = process.env.PORT || 3434;

app.listen(port, async () => {
	console.log(`Listening on port ${port}`)
})
