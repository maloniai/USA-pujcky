'use client'

import { useEffect, useRef } from 'react'

export default function ApplicationFormScript() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
    if (!iframeDoc) return

    // Write the complete HTML with scripts into the iframe
    iframeDoc.open()
    iframeDoc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: system-ui, -apple-system, sans-serif;
            }
            #rsForm {
              width: 100%;
              min-height: 600px;
            }
          </style>
          <script src="https://www.rndframe.com/server/web/js/json.min.js" type="text/javascript"></script>
        </head>
        <body>
          <script type='text/javascript'> 
            var srcURL = 'https://www.rndframe.com/server';
            var inputOptions = {
              UserID: 'fO2GyTVOix5nom4ZiFxCKOsJQt19rIJKGPfVW9CJwxk.',
              Style: 'STYLE1',
              FormID: 'INSTALLMENT_STEP',
              SubID: '',
              SubID2: '',
              SubID3: '',
              Domain: window.location.hostname,
              Height: 'AUTO',
              StepAmountSelect: 'buttons'
            };
            document.write('<scr'+'ipt type="text/javascript" src="'+ 
              srcURL +'/init.php?vn=' + encodeURIComponent(JSON.stringify(inputOptions)) + '"></scr'+'ipt>');
            if(!inputOptions.TargetDivID){document.write('<di'+'v id="rsForm"></di'+'v>');}
          </script>
        </body>
      </html>
    `)
    iframeDoc.close()
  }, [])

  return (
    <iframe
      ref={iframeRef}
      className="loan-application-form w-full border-0"
      style={{ minHeight: '600px', height: '600px' }}
      title="Loan Application Form"
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      loading="lazy"
    />
  )
}