import type { BaseEditor } from 'slate';
import type { ReactEditor } from 'slate-react';
import type { HistoryEditor } from 'slate-history';

type CustomElement = { type: 'paragraph'; children: CustomText[] };
type CustomText = { text: string; bold?: true; underline?: true; italic?: true };

declare module 'slate' {
  // Should be an interface, in another way doesn't work
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
