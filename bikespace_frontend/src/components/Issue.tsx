import React from "react";
import { IssueType } from "../interfaces/Submission";
import BaseButton from "./BaseButton";

const Issue = (props: {issues: IssueType[], onIssuesChanged: (issues: IssueType[]) => void}) => {
  const issues = props.issues
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let issueType: IssueType;
    switch (e.currentTarget.dataset.value) {
      case "not_provided":
        issueType = IssueType.NotProvided;
        break;
      case "full":
        issueType = IssueType.Full;
        break;
      case "damaged":
        issueType = IssueType.Damaged;
        break;
      case "abandoned":
        issueType = IssueType.Abandoned;
        break;
      default:
        issueType = IssueType.Other;
        break;
    }

    let newIssues: IssueType[];
    if (!issues.includes(issueType)) {
      newIssues = [...issues, issueType]
    } else {
      newIssues = [...issues.filter((issue) => issue !== issueType)];
    }
    props.onIssuesChanged(newIssues);
  };

  return (
    <div id="submission-issue">
      <h2>What was the issue?</h2>
      <h3>Choose at least one</h3>
      <ul>
        <li>
          <BaseButton
            active={issues.includes(IssueType.NotProvided)}
            value="not_provided"
            onClick={handleClick}
          >
            Bicycle parking is&nbsp;<strong>not provided</strong>
          </BaseButton>
        </li>
        <li>
          <BaseButton
            active={issues.includes(IssueType.Full)}
            value="full"
            onClick={handleClick}
          >
            Bicycle parking is&nbsp;<strong>full</strong>
          </BaseButton>
        </li>
        <li>
          <BaseButton
            active={issues.includes(IssueType.Damaged)}
            value="damaged"
            onClick={handleClick}
          >
            Bicycle parking is&nbsp;<strong>damaged</strong>
          </BaseButton>
        </li>
        <li>
          <BaseButton
            active={issues.includes(IssueType.Abandoned)}
            value="abandoned"
            onClick={handleClick}
          >
            A bicycle is&nbsp;<strong>abandoned</strong>
          </BaseButton>
        </li>
        <li>
          <BaseButton
            active={issues.includes(IssueType.Other)}
            value="other"
            onClick={handleClick}
          >
            Something else
          </BaseButton>
        </li>
      </ul>
    </div>
  );
};
export default Issue;