import type { FC } from "react";
import React from 'react'
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkReact from "remark-react";
import './preview.css'
import 'github-markdown-css/github-markdown.css'
import RemarkCode from "./remarkCode";
import { defaultSchema } from 'hast-util-sanitize'
interface Props {
  doc: string
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), 'className']
  }
}

const Preview: FC<Props> = (props) => {
  const md = unified().use(remarkParse).use(remarkGfm).use(remarkReact, {
    createElement: React.createElement,
    sanitize: schema,
    remarkReactComponents: {
      code: RemarkCode
    }
  }).processSync(props.doc).result
  return <div id="preview-area" className="preview markdown-body">{md}</div>
}
export default Preview
