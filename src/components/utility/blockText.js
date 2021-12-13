import React from "react";
import PortableText from "react-portable-text";

function blockText({content}) {
  return (
    /* Example of storing with a Provider component providing store globaly top level */
    <PortableText content={content}
       serializers={{
         ul: ({ children }) => <ul className="list-disc ml-16 my-32">{children}</ul>,
     }} />
  );
}

export default blockText;
