import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

function findUser (username: string, psw: string): { username: string } {
  return { username }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "domain-login",
      name: "Credentials",
      async authorize(credentials) {
        if (credentials) {
          const { username, password } = credentials
          if (username && password) {
            const user = findUser(username, password)
            if (user) return { name: user.username }
          }
        }
        return null
      },
      credentials: {
        username: { label: "Username", type: "text " },
        password: { label: "Password", type: "password" },
      },
    }),
  ]
})