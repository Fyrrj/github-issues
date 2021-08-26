import React from "react";
import IssueItem from "./IssueItem";
import "../styles/IssueGroup.css";

const IssueGroup = ({ group, setIssuesList, issuesList }) => {
  return (
    <div className="issueGroup">
      <span className="issueItem__data">{group.groupData}</span>
      {group.groupIssues.map((issues, index) => (
        <IssueItem
          key={`${issues.title}${issues.id}`}
          title={issues.title}
          star={issues.star}
          setIssuesList={setIssuesList}
          id={issues.id}
          index={index}
          issuesList={issuesList}
          group={group}
        />
      ))}
    </div>
  );
};

export default IssueGroup;
