import * as React from "react";
import * as ReactDOM from "react-dom";

import Heading from './components/Heading';
import Intro from './components/Intro';
import TabDemo from './components/TabDemo';

ReactDOM.render(
    <div>
        <Heading />
        <Intro />
    </div>,
    document.getElementById("greeting")
);

ReactDOM.render(
    <TabDemo />,
    document.getElementById("tabGoesHere")  
);