import React from "react";
import { Link } from "react-router-dom";

const QuestionRelated = ({ data }) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden">
      <div className="text-lg font-bold px-4 py-2 bg-gray-200">
        Related
      </div>
      <div className="p-4">
        <ul className="list-disc ml-[20px]">
          {data?.map((item, id) => {
            return (
            <li key={id}>
              <Link className="text-sm text-blue-500 hover:decoration-solid" to={`/questions/${item.slug}`}>{item.name}</Link>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default QuestionRelated;
