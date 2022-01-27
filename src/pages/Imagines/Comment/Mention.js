/**import React from "react";
// import { EditorState, convertToRaw } from "draft-js";
// import Editor from "@draft-js-plugins/editor";
// import createMentionPlugin, {
//   defaultSuggestionsFilter
// } from "@draft-js-plugins/mention";
// import editorStyles from "./editorStyles.module.css";
// import mentions from "./mentions";
// import "draft-js-mention-plugin/lib/plugin.css";

// const mention = () => {

//     let mentionPlugin = createMentionPlugin();

//  const[estate, esetState]  = useState({
//     editorState: EditorState.createEmpty(),
//     suggestions: mentions
//   });

//   const onChange = editorState => {
//     esetState({ editorState });
//   };

//   onSearchChange = ({ value }) => {
//     esetState({
//       suggestions: defaultSuggestionsFilter(value, mentions)
//     });
//   };

//   onExtractData = () => {
//     const contentState = this.state.editorState.getCurrentContent();
//     const raw = convertToRaw(contentState);
//     console.log(raw);
//   };

//   onExtractMentions = () => {
//     const contentState = this.state.editorState.getCurrentContent();
//     const raw = convertToRaw(contentState);
//     let mentionedUsers = [];
//     for (let key in raw.entityMap) {
//       const ent = raw.entityMap[key];
//       if (ent.type === "mention") {
//         mentionedUsers.push(ent.data.mention);
//       }
//     }
//     console.log(mentionedUsers);
//   };

//   render() {
//     const { MentionSuggestions } = this.mentionPlugin;
//     const plugins = [this.mentionPlugin];

//     return (
//       <div>
//         <div className={editorStyles.editor}>
//           <Editor
//             editorState={this.state.editorState}
//             onChange={this.onChange}
//             plugins={plugins}
//           />
//           <MentionSuggestions
//             onSearchChange={this.onSearchChange}
//             suggestions={this.state.suggestions}
//           />
//         </div>
//         <div>
//           <button onClick={() => this.onExtractData()}>Extract data</button>
//           <button onClick={() => this.onExtractMentions()}>
//             Extract mentions
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default TextInput;*/
