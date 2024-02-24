import React from "react";
import Inputfield from "./Inputfield";
import { useForm } from "react-hook-form";
import Button from "./Button";

const UploadTweet = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <div className="mx-auto w-min relative flex flex-col  items-center">
      <div className="w-[300px] sm:w-[500px] border-[1px] border-white rounded-2xl p-5">
        <div className="text-white text-3xl font-semibold flex justify-center">
          Write your Tweet
        </div>
        <div className="w-full flex flex-col justify-center  pt-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center"
          >
            <textarea
              rows="4" // Set the number of visible rows
              cols="50" // Set the number of visible columns
              placeholder="Enter your text here..."
              name="tweet"
              onChange={(e) => console.log(e.target.value)}
              className="rounded-2xl p-3"
              {...register(
                "tweet",
                { required: true }
              )}
            />

            <Button type={'submit'} content="Post" className="mt-3"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadTweet;
