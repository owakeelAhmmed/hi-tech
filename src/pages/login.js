// import { Button } from "antd";
// import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { BsGithub } from "react-icons/bs";
import Navbar from "@/components/shared/navbar";
import { signIn } from "next-auth/react";
const LoginPage = () => {
  return (
    <div className="h-[calc(100vh-80px)] max-w-7xl mx-auto">
      <Navbar />
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className="text-4xl flex justify-center m-5">
          {/* <GoogleOutlined />
          <GithubOutlined /> */}
          <BsGithub
            className="cursor-pointer"
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://hi-tech-psi.vercel.app/",
              })
            }
          />
        </div>
        <hr />
        <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
