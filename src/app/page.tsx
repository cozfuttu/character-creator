import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const isLoggedIn = !!session?.user;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoggedIn ? `Hosgeldiniz, ${session?.user?.name}` : "Lutfen giris yapiniz"}
    </main>
  );
}
