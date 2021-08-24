import React, { useState } from "react";
import IssueGroup from "./IssueGroup";
import "../styles/IssuesList.css";

const IssuesList = () => {
  const [issuesList, setIssuesList] = useState([
    {
      groupId: 0,
      groupData: "19-07-2016",
      groupIssues: [
        {
          id: 0,
          title:
            "Page changes Page changes Page changes Page changes Page changes",
          star: true,
        },
        {
          id: 1,
          title: "Review of last issues",
          star: true,
        },
      ],
    },
    {
      groupId: 1,
      groupData: "18-07-2016",
      groupIssues: [
        {
          id: 2,
          title: "Visual UI Update Review",
          star: false,
        },
        {
          id: 3,
          title: "Sidebar changes",
          star: false,
        },
      ],
    },
    {
      groupId: 2,
      groupData: "15-07-2016",
      groupIssues: [
        {
          id: 4,
          title: "Crash update",
          star: false,
        },
        {
          id: 5,
          title: "Page visual UI Update Review",
          star: true,
        },
        {
          id: 6,
          title: "Sidebar update",
          star: false,
        },
      ],
    },
    {
      groupId: 3,
      groupData: "14-07-2016",
      groupIssues: [
        {
          id: 7,
          title: "Crash issue",
          star: true,
        },
        {
          id: 8,
          title: "Visual update & Crash resolve",
          star: true,
        },
        {
          id: 9,
          title: "Header changes",
          star: false,
        },
      ],
    },
  ]);

  return (
    <div className="issuesList">
      {issuesList.map((group) => (
        <IssueGroup
          key={group.groupId}
          group={group}
          setIssuesList={setIssuesList}
          issuesList={issuesList}
        />
      ))}
    </div>
  );
};

export default IssuesList;
