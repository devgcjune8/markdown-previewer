import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  } });


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ placeholder, handleTextAreaChange }) => /*#__PURE__*/
React.createElement("div", { className: "column", id: "edit" }, /*#__PURE__*/React.createElement("textarea", { id: "editor", spellcheck: "false", value: placeholder, onChange: handleTextAreaChange }), /*#__PURE__*/React.createElement("h1", { className: "label" }, "Markdown Editor"));

const Previewer = ({ placeholder }) => /*#__PURE__*/React.createElement("div", { id: "prev", className: "column" }, /*#__PURE__*/React.createElement("div", { id: "preview", dangerouslySetInnerHTML: {
    __html: marked(placeholder, { renderer: renderer }) } }), /*#__PURE__*/

React.createElement("h1", { className: "label" }, "Markdown Previewer"));
const classes = [];
const App = () => {
  const [placeholder, setContent] = React.useState(`# Markdown H1

## Markdown H2
### Markdown H3

Cover \`<code></code>\` with escaped backticks.
\`\`\`

// comment:

function multilinecode(linesOfCode) {
  if (linesOfCode > 1) {
    return console.log("More than one line of code should be used with three escaped backticks");
  } else {
    return console.log(" one line of code should be used with one escaped backticks")
  }
}


\`\`\`

**Bold** in markdown is two asterisk in each sides of string or numbers.
_Italic_ in markdown is underscore on both sides of selected elements
**_Combined them or what ever_**

~~Two tildes on both sides~~ to make a strikethrough text

To make hyperlink add [square brackets on both sides](https://www.englishclub.com/writing/punctuation-brackets.htm)

> indent text with greater than sign before the text



Make table | with vertical bar | on each column
------------ | ------------- | -------------
to separate them | from each other | filler text
use \`------------\` | to separate first row | from the others.

- Make a bullet list with hyphen before the text
  - Make sure to indent them to see
      - the different bullet styles.
        - Indent them based on the layer


1. Make numbered list with \`1.\` before the text,
1. on all items,
1. inside the list

>>> ![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
`);

  const handleTextAreaChange = event => {
    setContent(event.target.value);
  };
  return /*#__PURE__*/(
    React.createElement("div", { className: "main" }, /*#__PURE__*/
    React.createElement(Editor, { placeholder: placeholder, handleTextAreaChange: handleTextAreaChange, placeholder: placeholder }), /*#__PURE__*/
    React.createElement(Previewer, { placeholder: placeholder })));

};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));