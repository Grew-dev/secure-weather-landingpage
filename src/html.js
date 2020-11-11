import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script dangerouslySetInnerHTML={{
                __html: `
            (function(){

              window.ldfdr = window.ldfdr || {};
              (function(d, s, ss, fs){
                fs = d.getElementsByTagName(s)[0];

                function ce(src){
                  var cs  = d.createElement(s);
                  cs.src = src;
                  setTimeout(function(){fs.parentNode.insertBefore(cs,fs)}, 1);
                }

                ce(ss);
              })(document, 'script', 'https://sc.lfeeder.com/lftracker_v1_YEgkB8lmyAv7ep3Z.js');
            })();
          </script>`,
          }}
          />
          <script dangerouslySetInnerHTML={{
                __html: `var cpm = {};
                (function(h,u,b){
                var d=h.getElementsByTagName("script")[0],e=h.createElement("script");
                e.async=true;e.src='https://cookiehub.net/c2/4667baf2.js';
                e.onload=function(){u.cookiehub.load(b);}
                d.parentNode.insertBefore(e,d);
                })(document,window,cpm);`,
            }}
        />

      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
