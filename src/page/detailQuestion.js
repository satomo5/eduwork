import React from "react";
import QuestionSection from "../components/question-section";
import QuestionRelated from "../components/question-related";
import { DATA_QUESTION, DATA_RELATED } from "../const/const";

const DetailQuestion = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="col-span-3 sm:col-span-2 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 p-[20px] bg-white">
        <h1 className="text-2xl font-bold">
          Cara menggunakan CSS
        </h1>
        <div className="flex gap-3 mt-2">
          <p className="text-stone-500 text-xs">
            Asked <span className="text-stone-800 font-semibold">4 years, 1 month ago</span>
          </p>
          <p className="text-stone-500 text-xs">
            Modified <span className="text-stone-800 font-semibold">1 month ago</span>
          </p>
          <p className="text-stone-500 text-xs">
            Viewed <span className="text-stone-800 font-semibold">10k times</span>
          </p>
        </div>
        <div className="border-t-2 border-solid mt-4 pt-4 border-gray-300 dark:border-gray-600">
          <QuestionSection user={DATA_QUESTION.main.user} data={DATA_QUESTION.main.data} />
        </div>
        <div className="mt-[30px]">
          <div>
            <h2 className="text-xl font-semibold">
              Answer
            </h2>
          </div>
          <div className="mt-8">
            {DATA_QUESTION.list?.map((item, id) => {
              return (
                <div key={id} className="mt-4 pt-4 first:mt-0 first:pt-0 first:border-0 border-solid border-t border-dashed border-gray-300 dark:border-gray-600">
                  <QuestionSection user={item.user} data={item.data} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="col-span-3 sm:col-span-1 mb-10 border-dashed rounded-lg border-gray-300 dark:border-gray-600">
        {/* tags  */}
        <QuestionRelated data={DATA_RELATED} />
        
      </div>
    </div>
  );
};

export default DetailQuestion;
