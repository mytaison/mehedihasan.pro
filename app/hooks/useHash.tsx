"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useHash = () => {
  const getHash = () =>
    typeof window !== "undefined" ? window.location.hash : null;

  const [isClient, setIsClient] = useState(false);
  const [hash, setHash] = useState(getHash());
  const params = useParams();

  useEffect(() => {
    setIsClient(true);
    setHash(getHash());
    console.log("params changed.");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    console.log(hash);
  }, [hash]);

  return isClient
    ? { hash: hash, setHash: setHash }
    : { hash: null, setHash: null };
};

export default useHash;
