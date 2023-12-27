import Head from "next/head";
import Image from "next/image";
import { Content, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import Link from "next/link";
import FormGenerate from "@/components/FormGenerate.js";
import { Children } from "react";
import ValidateData from "../../components/ValidateData";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ValidateData></ValidateData>
    </>
  );
}
