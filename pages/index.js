import Head from "next/head";
import Image from "next/image";
import { Content, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header></Header>
      <section id="hero" className="d-flex align-items-center">
        <div className="container m-5">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>JSON Schema Validator</h1>
              <h2>Validating Your JSON Data String</h2>
              <div className="d-flex justify-content-center justify-content-lg-start mt-3">
                <Link
                  href="/generate"
                  className="btn btn-primary scrollto mr-4"
                >
                  Generate New Schema
                </Link>
                <p className="m-3"></p>
                <Link href="/validate" className="btn btn-primary scrollto">
                  Validate Data
                </Link>
                <p className="m-3"></p>
                <Link href="/faq" className="btn btn-warning">FAQ!</Link>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="../assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
