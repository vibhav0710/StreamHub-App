import React, { useState } from "react";

function DescriptionBox({ description, maxLength }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toogleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const parseDescription = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const lines = text.split("\n").map((line) => line.trim());

    return lines.map((line, index) => {
      const parts = line.split(urlRegex).map((part, i) => {
        if (urlRegex.test(part)) {
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {part}
            </a>
          );
        }
        return part;
      });

      if (
        line.startsWith("📌") ||
        line.startsWith("💡") ||
        line.startsWith("👩‍💻")
      ) {
        return (
          <h3 key={index} className="font-bold mt-4">
            {parts}
          </h3>
        );
      } else if (line.startsWith("-")) {
        return <li key={index}>{parts}</li>;
      } else {
        return <p key={index}>{parts}</p>;
      }
    });
  };

  const ExpandedDescription = () => {
    return (
      <div>
        {parseDescription(description)}
        <div>
          <button onClick={toogleDescription} className="text-white py-2">
            Show Less
          </button>
        </div>
      </div>
    );
  };

  const CondensedDescription = () => {
    const shortenedDescription = description.substring(0, maxLength - 3);

    return (
      <div>
        {parseDescription(shortenedDescription)}
        {description.length > maxLength && (
          <div>
            <button className="text-white" onClick={toogleDescription}>
              Show more
            </button>
          </div>
        )}
      </div>
    );
  };

  return isExpanded ? <ExpandedDescription /> : <CondensedDescription />;
}

export default DescriptionBox;
