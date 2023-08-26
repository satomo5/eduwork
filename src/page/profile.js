import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faCakeCandles,
  faPencil,
  faComments,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { DATA_PROFILE_QUESTION, DATA_TAGS } from "../const/const";
import { Link } from "react-router-dom";
import Button from "../components/button";

const THRESHOLD_RENDER = 4;

const QuestionAnswerSection = (props) => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <p className="font-bold mb-2 text-lg">{props.title}</p>
      {props.data?.length > 0 ? (
        <div className="border rounded-lg min-h-[150px]">
          {props.data.map((item, id) => {
            if (id < THRESHOLD_RENDER * page)
              return (
                <Link
                  key={id}
                  className="block p-4 border-b hover:bg-gray-200 duration-150"
                  to={`/questions/${item.slug}`}
                >
                  <p className="font-semibold text-blue-600">{item.title}</p>
                  <div className="flex items-center gap-4 text-gray-600 text-[12px]">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faComments} />
                      <p>{item.count?.comment || 0} Comments</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faArrowUp} />
                      <p>{item.count?.upvote || 0} Upvote</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faArrowDown} />
                      <p>{item.count?.downvote || 0} Downvote</p>
                    </div>
                  </div>
                </Link>
              );

            if (id === THRESHOLD_RENDER * page)
              return (
                <div
                  key={id}
                  className="p-4 hover:bg-gray-200 duration-150 cursor-pointer"
                  onClick={() => setPage(page + 1)}
                >
                  <p className="text-sm font-bold text-center text-gray-800">
                    See more . . .
                  </p>
                </div>
              );

            return null;
          })}
        </div>
      ) : (
        <div className="border rounded-lg p-4 min-h-[150px] flex items-center justify-center">
          <p className="text-sm text-center text-gray-500">
            You have not answered any questions
          </p>
        </div>
      )}
    </div>
  );
};

const Tags = (props) => {
  return (
    <>
      <p className="font-bold mb-2 text-lg">Tags</p>
      <div className="flex gap-4">
        {props.data?.map((item, id) => {
          return (
            <div key={id} className="text-[12px] cursor-pointer p-2 text-blue-800 bg-blue-200 hover:bg-blue-400 duration-150 rounded-sm">
              {item}
            </div>
          )
        })}
      </div>
    </>
  );
};

const Profile = () => {
  return (
    <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 p-[20px] bg-white">
      <div className="flex justify-between gap-[20px]">
        <div className="flex items-center gap-6">
          <img
            className="rounded-full w-[100px] h-[100px] object-contain"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
            alt="user"
          />
          <div>
            <h1 className="text-2xl font-bold">JokoUser</h1>
            <div className="flex gap-4 items-center mt-2">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <FontAwesomeIcon icon={faCakeCandles} />
                <p>Member since 20 August 2023</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <FontAwesomeIcon icon={faComment} />
                <p>300 Answer</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button type="secondary" outlined>
            <FontAwesomeIcon icon={faPencil} />
            Edit Profile
          </Button>
        </div>
      </div>
      <div className="border-t-2 mt-4 pt-4 border-dashed">
        <div className="grid gap-4 grid-cols-2">
          <QuestionAnswerSection title="Answer" data={DATA_PROFILE_QUESTION} />
          <QuestionAnswerSection
            title="Question"
            data={DATA_PROFILE_QUESTION}
          />
        </div>
      </div>
      <div className="mt-8">
        <Tags data={DATA_TAGS} />
      </div>
    </div>
  );
};

export default Profile;
