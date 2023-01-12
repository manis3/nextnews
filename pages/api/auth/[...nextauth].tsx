import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { useRouter } from "next/router";

const AuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        //////////////////Perform login logic  to find out the user from db/////////
        // const router = useRouter();
        if (email !== "ma@gmail.com" || password !== "12345") {
          throw new Error("invalid Email and Password");
        }

        // router.push("../../Server/Dashboard");
        return {
          id: "1234",
          name: "Manish Hyongoju",
          email: "m@gmail.com",
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "../../auth/Login",
  },
  // callbacks:{
  //     jwt(params){
  //         if(params.user?.role){
  //             params.token.role = params.user.role;
  //         }
  //         return params.token;

  //     }
  // }
};
export default NextAuth(AuthOptions);
