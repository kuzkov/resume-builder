/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BoldOutlined, ItalicOutlined, UnderlineOutlined } from '@ant-design/icons';
import { useState, useCallback, type MouseEventHandler, type ReactNode } from 'react';
import { Editor, createEditor, type BaseEditor, type Descendant } from 'slate';
import { Slate, Editable, withReact, useSlate, type ReactEditor, type RenderLeafProps } from 'slate-react';
import { Button } from 'antd';
import './text-editor.less';

const defaultValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

export type TextEditorProps = {
  initialValue?: any;
  onChange?: (value: any) => void;
};

export function TextEditor({ initialValue = defaultValue, onChange }: TextEditorProps) {
  const [editor, setEditor] = useState(() => withReact(createEditor()));
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);

  return (
    <div className='rb-text-editor'>
      <Slate editor={editor} value={initialValue} onChange={(value) => onChange?.(value)}>
        <div className='rb-text-editor__toolbar'>
          <MarkButton format='bold' icon={<BoldOutlined />} />
          <MarkButton format='italic' icon={<ItalicOutlined />} />
          <MarkButton format='underline' icon={<UnderlineOutlined />} />
        </div>

        <Editable className='rb-text-editor__editable' {...{ renderLeaf }} />
      </Slate>
    </div>
  );
}

const toggleMark = (editor: BaseEditor & ReactEditor, format: string) => {
  const isActive = isActiveMark(editor, format);

  if (isActive) {
    editor.removeMark(format);
  } else {
    editor.addMark(format, true);
  }
};

const isActiveMark = (editor: BaseEditor & ReactEditor, format: string) => {
  const marks = Editor.marks(editor) as any;
  return marks ? marks[format] === true : false;
};

function MarkButton({ format, icon }: { format: string; icon: ReactNode }) {
  const editor = useSlate();

  const handleClick: MouseEventHandler = (event) => {
    event.preventDefault();
    toggleMark(editor, format);
  };

  return <Button size='small' type='text' icon={icon} onMouseDown={handleClick} />;
}

function Leaf({ children, leaf, attributes }: RenderLeafProps) {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.italic) {
    children = <i>{children}</i>;
  }

  return <span {...attributes}>{children}</span>;
}
