import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import {
  useState,
  useEffect,
  useCallback,
  MouseEventHandler,
  ReactNode,
} from "react";
import { Editor, createEditor, BaseEditor } from "slate";
import {
  Slate,
  Editable,
  withReact,
  RenderLeafProps,
  useSlate,
} from "slate-react";
import "./text-editor.less";

const initialValue = [
  {
    type: "paragraph",
    children: [
      { text: "This is editable " },
      { text: "rich", bold: true },
      { text: " text" },
    ],
  },
] as any;

export const TextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  return (
    <div className="rb-text-editor">
      <Slate editor={editor} value={initialValue}>
        <div className="rb-text-editor__toolbar">
          <MarkButton format="bold" icon={<BoldOutlined />} />
          <MarkButton format="italic" icon={<ItalicOutlined />} />
          <MarkButton format="underline" icon={<UnderlineOutlined />} />
        </div>

        <Editable className="rb-text-editor__editable" {...{ renderLeaf }} />
      </Slate>
    </div>
  );
};

const toggleMark = (editor: BaseEditor, format: string) => {
  const isActive = isActiveMark(editor, format);

  if (!isActive) {
    editor.addMark(format, true);
  } else {
    editor.removeMark(format);
  }
};

const isActiveMark = (editor: BaseEditor, format: string) => {
  const marks = Editor.marks(editor) as any;
  return marks ? marks[format] === true : false;
};

const MarkButton = ({ format, icon }: { format: string; icon: ReactNode }) => {
  const editor = useSlate();

  const handleClick: MouseEventHandler = (event) => {
    event.preventDefault();
    toggleMark(editor, format);
  };

  return (
    <Button size="small" type="text" onMouseDown={handleClick} icon={icon} />
  );
};

const Leaf = ({ children, leaf, attributes }: RenderLeafProps) => {
  console.log(leaf);

  // @ts-ignore
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  // @ts-ignore
  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  // @ts-ignore
  if (leaf.italic) {
    children = <i>{children}</i>;
  }

  return <span {...attributes}>{children}</span>;
};
