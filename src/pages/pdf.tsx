import Head from "next/head";

function Pdf() {
  return (
    <>
      <Head>
        <title>Juan Tremols Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <object
        style={{ width: "100vw", height: "100vh" }}
        data="/ResumeJuanTremols.pdf"
        type="application/pdf"
      >
        <embed src="/ResumeJuanTremols.pdf" type="application/pdf" />
      </object>
    </>
  );
}

export default Pdf;
