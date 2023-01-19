import React, { useState } from "react";
import Image from "next/image";
import * as stringConstants from "../constants/strings";
const CharacterDetail = ({ character }) => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-xl grid-cols-1 items-center gap-y-16 gap-x-4 py-8 px-4 sm:px-6 sm:py-16 lg:max-w-7xl  lg:px-8">
        <div className=" overflow-hidden bg-white shadow sm:rounded-lg  mx-auto">
          <Image
            src={character?.image}
            alt={character?.name}
            width={300}
            height={300}
            className="rounded-lg bg-gray-100"
          />
        </div>
        <div className="overflow-hidden bg-white shadow sm:rounded-lg ">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {stringConstants.CHARACTER_DETAILS}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {stringConstants.DUMMY_DESCRIPTION}
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {stringConstants.FULL_NAME}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {character?.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {stringConstants.SPECIES}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {character?.species}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {stringConstants.STATUS}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {character?.status}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {stringConstants.GENDER}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {character?.gender}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {stringConstants.EPISODES}
                </dt>

                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {character?.episode.map((episode) => (
                    <li key={episode?.name} className="text-gray-400">
                      <span className="text-gray-600">{episode?.name}</span>
                    </li>
                  ))}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {stringConstants.LOCATION}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {character?.location.name}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {stringConstants.ORIGIN}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {character?.origin.name}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
