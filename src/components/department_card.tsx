import React from "react";
import { Department } from "../types/department.type";
import classNames from "classnames";

interface DepartmentCardPropsType {
  data: Department;
  key: string;
}

export const DepartmentCard = (props: DepartmentCardPropsType) => {
  //---------------------
  // RENDER
  //---------------------
  return (
    <div
      key={props.key}
      className="bg-white rounded-[5px] p-5 custom-shadow w-[476px]"
    >
      <div className="flex justify-between border-b border-b-[#d8d8d8] mb-1 pb-6">
        <div className="flex space-x-2">
          <div className="w-[100px] h-[100px] flex-shrink-0 flex justify-center items-center">
            <img
              src={props.data?.logo}
              alt="department logo"
              className="w-[80px] h-[86px] flex-shrink-0 object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="prompt-semibold text-[24px] leading-4 text-[#ff5a5a]">
                {props.data?.faculty?.name}
              </h3>
              <p className="prompt-medium text-[20px] leading-4 text-[#9b9b9b]">
                {props.data?.name}
              </p>
            </div>
            <p className="prompt-light text-[20px] leading-4 text-[#9b9b9b]">
              {props.data?.faculty?.university?.name}
            </p>
          </div>
        </div>
        <img src="/images/heart.svg" className="w-6 h-5 flex-shrink-0" />
      </div>
      <div className="flex space-x-6 items-center mt-4">
        <p className="prompt-light text-[20px] leading-5 text-[#5f5f5f]">รอบที่เปิด</p>
        <div className="flex space-x-2 items-center">
          {props.data?.roundSeats?.map((seat: number, index: number) => (
            <div
              key={`${props.data?.id}_seat_round_${index}`}
              className={classNames(
                "w-[29px] h-[29px] flex flex-shrink-0 items-center justify-center text-white prompt-medium text-[18px] rounded-full",
                {'bg-[#2ecc71]': seat > 0}, {'bg-[#d8d8d8]': seat <= 0}
              )}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="prompt-semibold text-[16px] leading-4 text-[#ff5a5a]">รอบที่ {props?.data?.score?.scoreType ? `4 : ${props.data?.score?.scoreType}` : '-'}</p>
        <div className="w-fit rounded-full border border-[#ff5a5a] py-2 pl-5 pr-3 flex space-x-3">
          <p className="prompt-medium text-[12px] text-[#ff5a5a]">แก้ไขคะแนน</p>
          <img src='/images/button_icon.svg' className="w-[18px] h-[18px] flex-shrink-0" />
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
          <img src='/images/badge.svg' className="w-[27px] h-[35px] ml-7 flex-shrink-0" />
          <div className="text-right">
            <p className="prompt-light text-[16px] text-[#4a4a4a]">คะแนนของคุณคือ</p>
            {/* sample mock data given doesn't have 'my_score' field */}
            <p className="prompt-light text-[42px] text-[#4a4a4a]">{props.data?.score?.score?.toLocaleString() || '-'}</p>
          </div>
      </div>
      <div className="flex justify-between items-center border-b border-b-[#d8d8d8] py-4 mb-1">
        <div className="text-center">
          <p className="prompt-regular text-[20px] leading-[16.8px] text-[#5f5f5f]">{props.data?.score?.min?.toLocaleString() || '-'}</p>
          <p className="prompt-regular text-[12px] leading-4 text-[#5f5f5f]">คะแนนต่ำสุด {props.data?.score?.year?.toString().split('25')?.[1] || '-' }</p>
        </div>
        <div className="border-l border-l-[#d8d8d8] w-[1.4px] h-[29px]" />
        <div className="text-center">
          <p className="prompt-regular text-[20px] leading-[16.8px] text-[#5f5f5f]">{props.data?.score?.avg?.toLocaleString() || '-'}</p>
          <p className="prompt-regular text-[12px] leading-4 text-[#5f5f5f]">คะแนนเฉลี่ย {props.data?.score?.year?.toString().split('25')?.[1] || '-'}</p>
        </div>
        <div className="border-l border-l-[#d8d8d8] w-[1.4px] h-[29px]" />
        <div className="text-center">
          <p className="prompt-regular text-[20px] leading-[16.8px] text-[#5f5f5f]">{props.data?.score?.max?.toLocaleString() || '-'}</p>
          <p className="prompt-regular text-[12px] leading-4 text-[#5f5f5f]">คะแนนสูงสุด {props.data?.score?.year?.toString().split('25')?.[1] || '-'}</p>
        </div>
      </div>
    </div>
  );
};
