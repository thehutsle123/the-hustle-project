
interface User {
	id?: number;
	username: string;
	fname: string;
	mname?: string;
	lname: string;
	email: string;
	password?: string;
	isAdmin?: boolean
}

export const userList: User[] = [
	{
		id: 1,
		fname: "Kwesi",
		mname: "",
		lname: "Amo",
		email: "kwesiamo@gmail.com",
		username: "kwesiamo",
		password: "123123",
		isAdmin: false
	}
]

