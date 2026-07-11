"use client";

import dynamic from "next/dynamic";

const SignatureInteraction = dynamic(
  () =>
    import("./SignatureInteraction").then(
      (mod) => mod.SignatureInteraction
    ),
  {
    ssr: false,
  }
);

export default SignatureInteraction;