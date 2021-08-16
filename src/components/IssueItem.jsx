import React from "react";
import StarIcon from "../components/StarIcon";
import "../styles/IssueItem.css";

const IssueItem = ({
  title,
  star,
  index,
  id,
  setIssuesList,
  issuesList,
  group,
}) => {
  return (
    <div className="issueItem">
      <p className="issueItem__title">{title}</p>
      <StarIcon
        star={star}
        index={index}
        id={id}
        setIssuesList={setIssuesList}
      />
    </div>
  );
};

export default IssueItem;
