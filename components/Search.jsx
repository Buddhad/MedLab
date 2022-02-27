import React, { useState, useEffect } from "react";
export const Search = () => {
  const Arry = [
    "RTPCR Covid Test ",
    "Antigen Covid test",
    "Covid A",
    "Covid B",
    "Blood Sugar test",
  ];

  const obj = [
    {
      id: 1,
      test: "RTPCR Covid Test ",
    },
    {
      id: 2,
      test: "Antigen Covid test",
    },
    {
      id: 3,
      test: "Covid A",
    },
    {
      id: 4,
      test: "Covid B",
    },
    {
      id: 5,
      test: "Blood Sugar test",
    },
  ];

  const [term, setTerm] = useState("");
  const [avlList, setAvalList] = useState([]);

  useEffect(() => {
    if (term.trim().length != 0) {
      Arry.forEach((item) => {
        let exists = item.includes(term);
        if (exists && !avlList.includes(item)) {
          setAvalList([...avlList, item]);
          console.log(item);
        }
      });
    } else {
      setAvalList([]);
    }
    if (term.trim().length != 0) {
      obj.filter
    }
  }, [term]);
  return (
    <div>
      <div className="flex align-top">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search"
          className="text-black p-3 outline-none rounded-l-md w-80 text-base bg-sky-300 "
        />
        <button className="text-black p-3 text-base rounded-r-md bg-sky-400 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="7" stroke="#333333" strokeWidth="2" />
            <path
              d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M20 20L17 17"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div>{avlList && avlList.map((e, i) => <div key={i}>{e}</div>)}</div>
    </div>
  );
};
