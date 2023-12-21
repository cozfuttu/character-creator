import { NextResponse } from "next/server";
import User from "@/models/user";
import { IUser } from "@/types";

export const GET = async () => {
  try {
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (e) {
    return new NextResponse("Error in fetching users.");
  }
};

export const POST = async (req: Request) => {
  const { user }: { user: IUser } = await req.json();
  const newUser = new User(user);
  newUser.save();
  return new NextResponse("User successfully added");
};
