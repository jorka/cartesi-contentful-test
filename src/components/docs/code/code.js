/* eslint react/jsx-boolean-value: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
import React from 'react';
import * as codeModuleStyle from './code.module.scss';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const Code = ({ codeString, language, metastring, ...props }) => {
  const codeBlockTitleRegex = /title=".*"/;
  let codeBlockTitle = '';

  if (metastring && codeBlockTitleRegex.test(metastring)) {
    codeBlockTitle = metastring
      .match(codeBlockTitleRegex)[0]
      .split('title=')[1]
      .replace(/"+/g, '');
  }

  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div
          id={codeModuleStyle.container}
          className='gatsby-highlight'
          data-language={language}
          style={{ overflow: 'auto' }}
        >
          {codeBlockTitle && (
            <div style={style} className={codeModuleStyle.codeBlockTitle}>
              {codeBlockTitle}
            </div>
          )}
          <pre
            className={[
              className,
              codeModuleStyle.pre,
              codeBlockTitle ? codeModuleStyle.contentWithTitle : '',
            ].join(' ')}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span
                    {...getTokenProps({ token, key })}
                    className={[codeModuleStyle.code].join(' ')}
                  />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Code;
