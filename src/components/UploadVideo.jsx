import React, { useEffect, useState } from "react";
import { MdDriveFolderUpload } from "react-icons/md";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  uploadVideo,
  uploadThumbnail,
  setTitle,
  setDescription,
  setIsPublished,
  resetAll,
} from "../store/uploadSlice";
import { publishVideo } from "../utils/videoDataFetch";

const UploadVideo = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const [result, setresult] = useState("");
  const [uploaded, setuploaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [completed, setcompleted] = useState(false);
  const onSubmit = async(data) => {
    if(currentStep == 4){
      
      const formData = new FormData();
      formData.append("video", data.video[0]);
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("thumbnail", data.thumbnail[0]);
      formData.append("isPublished",data.isPublished);
      const videoData = await publishVideo(formData);
      if(videoData){
        setresult("Video Uploaded Successfully ✅");

      }else{
        setresult("Something went wrong while uploading ❌")
      }
      setuploaded(true);
      console.log(videoData)
    }
  };

  const steps = [
    {
      name: "Video",
    },
    {
      name: "Details",
    },
    {
      name: "Uploaded",
    },
  ];


  const [videoUploaded, setVideoUploaded] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnailUploaded, setThumbnail] = useState(false);
  const [isPublished, setIsPublished] = useState(true);

  return (
    <div className="mx-auto w-min relative flex flex-col  items-center">
      {/* upper portion with three circles and green transition line */}
      <div className=" relative w-[300px] sm:w-[320px] md:w-[85%] lg:w-full  z-10 flex items-center justify-center gap-[70px] sm-[120px] md:gap-[150px] lg:gap-[200px] text-white">
        {steps.map((step, index) => (
          <div
            key={step.name}
            className="flex flex-col justify-center items-center "
          >
            <div
              className={` ${
                currentStep > index + 1 ? "bg-green-600" : "bg-blue-500"
              } font-semibold px-5 py-3 rounded-full`}
            >
              {currentStep > index + 1 ? "✓" : index + 1}
            </div>
            <div>{step.name}</div>
          </div>
        ))}

        <div className="absolute w-full mb-5  h-[10px] overflow-hidden -z-10 flex justify-center items-center ">
          <div className="w-[90%]  absolute  mx-5  -z-10 bg-white h-2 ">
            <div
              className={`transition-all duration-300 ease-in-out bg-green-500 h-full ${
                currentStep === 1 ? "w-0" : null
              } ${currentStep === 2 ? "w-1/2" : null} ${
                currentStep === 3 ? "w-full" : null
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* contains form */}
      <div className="  md::w-full flex flex-wrap">
        <form
          id="form"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full items-center"
        >
          <div className="w-full">
            {/* when current step is 1. */}
            {currentStep == 1 ? (
              <div className=" w-[270px] sm:w-[400px] flex flex-wrap justify-center h-[250px] border-[1px] border-white mt-2 rounded-3xl relative">
                <div
                  onClick={() => {
                    document.getElementById("video").click();
                  }}
                  className="-w-full flex flex-col h-full items-center justify-center text-white text-[150px]"
                >
                  <MdDriveFolderUpload />
                  <div className="text-lg font-bold">Upload</div>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  hidden
                  id="video"
                  {...register(
                    "video",
                    { onChange: (e) => setVideoUploaded(true) },
                    { required: true }
                  )}
                />
              </div>
            ) : null}

            {/* when current step is 2 */}
            {currentStep == 2 ? (
              <div className="w-full h-min border-[1px] border-white mt-2 rounded-3xl flex justify-center items-center gap-3 flex-col p-1 sm:p-5 z-10">
                <div
                  className={` p-2 w-[270px] sm:w-full  text-white border-[1px] rounded-3xl border-white flex  flex-col sm:flex-row gap-3    justify-center selection: `}
                >
                  <label className="p-2 flex  items-center justify-center  font-bold  sm:text-xl">
                    Title :{" "}
                  </label>
                  <input
                    type="text"
                    className="rounded-3xl p-2  text-black"
                    placeholder="Enter your title "
                    id="title"
                    {...register(
                      "title",
                      { onChange: (e) => setTitle(e.target.value) },
                      { required: true }
                    )}
                  />
                </div>
                <div
                  className={` p-2  w-[270px] sm:w-full text-white border-[1px] rounded-3xl border-white flex  gap-3  justify-center flex-col sm:flex-row`}
                >
                  <label className="p-2 flex items-center justify-center  font-bold  sm:text-xl">
                    Description :{" "}
                  </label>
                  <input
                    type="text"
                    className="rounded-3xl p-2 text-black"
                    placeholder="Enter your description "
                    id="description"
                    {...register(
                      "description",
                      { onChange: (e) => setDescription(e.target.value) },
                      { required: true }
                    )}
                  />
                </div>
                <div
                  className={` p-2 w-[270px]  sm:w-full text-white border-[1px] rounded-3xl border-white flex gap-3 justify-center flex-col sm:flex-row`}
                >
                  <label className="p-2 flex items-center justify-center  font-bold  sm:text-xl">
                    Thumbnail :{" "}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="rounded-3xl p-2"
                    placeholder="Select thumbnail "
                    id="thumbnail"
                    {...register(
                      "thumbnail",
                      { onChange: (e) => setThumbnail(true) },
                      { required: true }
                    )}
                  />
                </div>
              </div>
            ) : null}

            {/* when current step is 3 */}
            {currentStep == 3 ? (
              <div className="px-3 sm:px-10 w-full h-[250px] border-[1px] border-white mt-2 gap-7 rounded-3xl flex flex-col items-center justify-start">
                <div className="text-white text-3xl p-2 font-bold">
                  Visibility
                </div>
                <div className="flex gap-4">
                  <div className="  sm:text-2xl font-semibold text-white">
                    Select visibility :{" "}
                  </div>
                  <select
                    className="h-min text-xl"
                    id="isPublished"
                    name="isPublished"
                  >
                    <option value={true}>Public</option>
                    <option value={false}>Private</option>
                  </select>
                </div>
              </div>
            ) : null}

            {/* when current step is 4 */}
            {currentStep == 4 ? (
              <div className=" p-4 w-full h-[250px] border-[1px] border-white mt-2 gap-7 rounded-3xl flex flex-col items-center justify-center ">
                <div className="text-white text-3xl font-bold w-full flex items-center justify-center align-middle ">
                  {/* <span>Video </span> <span>uploaded </span>{" "}
                  <span>successfully </span> <span>✅</span> */}
                  {uploaded ? result :"Uploading...." }
                </div>
              </div>
            ) : null}

            {/* next button */}
            <div
              onClick={() => {
                // console.log(videoUploaded);
                if (
                  (currentStep == 1 && videoUploaded) ||
                  (currentStep == 2 &&
                    thumbnailUploaded &&
                    title != "" &&
                    description != "") ||
                  currentStep == 3
                ) {
                  setcurrentStep((prev) => prev + 1);
                } else {
                  alert("Input not provided");
                }
              }}
              className="w-full flex justify-end"
            >
                <Button
                  className={`${currentStep === 4 ? "bg-green-500 " : null}`}
                  content={`${currentStep < 3 ? "Next" : ""} ${
                    currentStep == 3 ? "Upload" : ""
                  } ${currentStep == 4 ? "Uploaded" : ""}`}
                />

             
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadVideo;
