import { BoldOutlined, ItalicOutlined, UnderlineOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState, useEffect, useCallback, type MouseEventHandler, type ReactNode } from 'react';
import { Editor, createEditor, type BaseEditor } from 'slate';
import { Slate, Editable, withReact, type RenderLeafProps, useSlate } from 'slate-react';
import './text-editor.less';

const defaultValue = [
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
  const [editor] = useState(() => withReact(createEditor()));
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

function MarkButton({ format, icon }: { format: string; icon: ReactNode }) {
  const editor = useSlate();

  const handleClick: MouseEventHandler = (event) => {
    event.preventDefault();
    toggleMark(editor, format);
  };

  return <Button size='small' type='text' icon={icon} onMouseDown={handleClick} />;
}

function Leaf({ children, leaf, attributes }: RenderLeafProps) {
  // @ts-expect-error
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  // @ts-expect-error
  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  // @ts-expect-error
  if (leaf.italic) {
    children = <i>{children}</i>;
  }

  return <span {...attributes}>{children}</span>;
}
