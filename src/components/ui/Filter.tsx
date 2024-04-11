"use client";
import { Size } from "@/types/Types";
import React from "react";
import { Color } from "../../types/Types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import Button from "./Button";
import { cn } from "@/libs/utils";

const Filter = ({
  valueKey,
  name,
  data,
}: {
  valueKey: string;
  name: string;
  data: Array<Size | Color>;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url, { scroll: false });
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((d) => (
          <div key={d.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300 ",
                selectedValue === d.id && "bg-black text-white"
              )}
              onClick={() => onClick(d.id)}
            >
              {" "}
              {d.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
