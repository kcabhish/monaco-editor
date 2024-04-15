import React from 'react';
import Editor from '@monaco-editor/react';
import schema from './sampleSchema.json';

type IJsonEditorProps = {
    onChange: React.Dispatch<React.SetStateAction<object>>;
}
function JsonEditor(props: IJsonEditorProps) {
    console.log(schema);
    enum wordWrapOptions {
        on='on',
        off='off',
        wordWrapColumn='wordWrapColumn',
        bounded='bounded'
    }

    const editorOptions = {
        minimap: {
            enabled: false,
        },
        /**
         * property to set the editor to readonly mode
         */
        readOnly: false,
        /**
         * Enable linked editing.
         * Defaults to false.
         */
        linkedEditing: true,
        /**
         * Enable that scrolling can go one screen size after the last line.
         * Defaults to true.
         */
        scrollBeyondLastLine: false,
        wordWrap: wordWrapOptions.on
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (value:any) => {
        props.onChange(value);
    }

    
    /**
     * Adding Custom Schema Validation
     * @param monaco 
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleEditorBeforeMount = (monaco: any) => {
        console.log("Before Mount Fired");
        console.log(monaco.languages.json.jsonDefaults);
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            schemas:[{
                fileMatch: ['*'],
                schema
            }], validate: true
        })
    }
    return (
        <Editor
          theme='vs-dark'
          options={editorOptions}
          height="90vh"
          defaultLanguage="json"
          defaultValue="// some comment"
          onChange={handleChange}
          beforeMount={handleEditorBeforeMount}
        />
      );
}

export default JsonEditor;
