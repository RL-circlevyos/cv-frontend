import React, { useState, useRef } from "react";
import { EditorState } from "draft-js";

import Editor from "@draft-js-plugins/editor";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "@draft-js-plugins/mention";
import "draft-js/dist/Draft.css";
import "@draft-js-plugins/mention/lib/plugin.css";

// Draft-JS-Mentions plugin configuration
const mentionPlugin = createMentionPlugin();
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

const Mention = ({ mentions }) => {
  const [suggestions, setSuggestions] = useState(mentions);

  // Draft-JS editor configuration
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editor = useRef(null);

  // Check editor text for mentions
  const onSearchChange = ({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  };

  const onAddMention = () => {};

  // Focus on editor window
  const focusEditor = () => {
    editor.current.focus();
  };

  return (
    <div onClick={() => focusEditor()}>
      <Editor
        ref={editor}
        editorState={editorState}
        plugins={plugins}
        onChange={(editorsState) => setEditorState(editorsState)}
        placeholder={"Type here..."}
      />
      <MentionSuggestions
        onSearchChange={onSearchChange}
        suggestions={suggestions}
        onAddMention={onAddMention}
      />
    </div>
  );
};

export default Mention;
