import React from "react";
import "../styles/StarIcon.css";

const StarIcon = ({ star, id, setIssuesList, group }) => {
  const changeStar = (grpId, issueId) => {
    setIssuesList((list) =>
      list.map((item) =>
        item.groupId === grpId
          ? {
              ...item,
              groupIssues: item.groupIssues.map((issue) =>
                issue.id === issueId ? { ...issue, star: !issue.star } : issue
              ),
            }
          : item
      )
    );
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      className={star ? "staricon filled" : "staricon unfilled"}
      onClick={() => {
        changeStar(group.groupId, id);
      }}
    >
      <path
        d="M8.500,0.000 L11.301,5.028 L16.999,6.112 L13.033,10.302 L13.753,16.000 L8.500,13.561 L3.247,16.000 L3.967,10.302 L0.001,6.112 L5.699,5.028 L8.500,0.000"
        fill={star ? "#21233d" : "#fff"}
        stroke={star ? "none" : "#e0e0e0"}
      />
    </svg>
  );
};

export default StarIcon;
