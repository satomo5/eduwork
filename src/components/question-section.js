import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const QuestionSection = ({ user, data }) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center border-[1px] rounded-full w-[44px] h-[44px] hover:bg-green-200 duration-150 cursor-pointer">
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        <p className="text-lg text-center">{data.vote || 0}</p>
        <div className="flex items-center justify-center border-[1px] rounded-full w-[44px] h-[44px] hover:bg-red-200 duration-150 cursor-pointer">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div>
        <div className="code-section">{data.question || ""}</div>
        <div className="mt-8 flex gap-8 justify-between items-end">
          {data.tag?.length > 0 ? (
            <div className="flex gap-2">
              {data.tag.map((item, id) => {
                return (
                  <div key={id} className="text-[12px] cursor-pointer p-2 text-blue-800 bg-blue-200 hover:bg-blue-400 duration-150 rounded-sm">
                    {item}
                  </div>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
          {user && (
            <div className="flex gap-4 items-center">
              <img
                className="w-[30px] h-[30px] rounded-full object-contain"
                src={user.avatar}
                alt={`${user.username} avatar`}
              />
              <div>
                <p className="text-semibold">{user.username}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
