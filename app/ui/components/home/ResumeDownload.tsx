"use client";
import { useState } from "react";
import DownloadButton from "../shared/DownloadButton";

const ResumeDownload = () => {
  const [downloadError, setDownloadError] = useState("");
  const googleDriveLink = process.env.NEXT_PUBLIC_RESUME_DRIVE_LINK;
  const Download = async () => {
    try {
      const response = await fetch("/api/resume", {
        method: "GET",
        mode: "same-origin",
        cache: "default",
        headers: {
          "Content-Type": "application/pdf",
        },
      });
      console.log(response);
      if (response.ok) {
        const blob = await response.blob();
        const filename =
          response.headers !== null
            ? response.headers
                .get("content-disposition")
                ?.split("filename=")[1]
                .split('"')[1]
            : "Resume - Mehedi Hasan";
        const file = window.URL.createObjectURL(blob);
        Object.assign(document.createElement("a"), {
          href: file,
          download: filename,
        }).click();
      } else {
        setDownloadError(`Download Failed, try:`);
      }
    } catch (e) {
      console.log(e);
      setDownloadError("Something went wrong.");
    }
  };
  return (
    <div className="p-6 flex flex-col animate-opacityOnload5s">
      <DownloadButton
        onClick={Download}
        label={"Download Resume!"}
      ></DownloadButton>
      {downloadError !== "" ? (
        <>
          <span className="flex p-2 gap-2">
            {downloadError}
            <a
              className="text-blue-500 dark:text-yellow-300 visited:text-blue-500 dark:visited:text-yellow-300"
              target="_blank"
              href={`${googleDriveLink}`}
            >
              Google Drive Link
            </a>
          </span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ResumeDownload;
