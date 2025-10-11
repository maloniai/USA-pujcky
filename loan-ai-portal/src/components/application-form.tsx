'use client'

import { useEffect } from 'react'

export default function ApplicationForm() {
  useEffect(() => {
    // Load the JSON library
    const jsonScript = document.createElement('script')
    jsonScript.src = 'https://www.rndframe.com/server/web/js/json.min.js'
    jsonScript.type = 'text/javascript'
    document.head.appendChild(jsonScript)

    // Initialize the form after JSON library loads
    jsonScript.onload = () => {
      const srcURL = 'https://www.rndframe.com/server'
      const inputOptions = {
        UserID: 'fO2GyTVOix5nom4ZiFxCKOsJQt19rIJKGPfVW9CJwxk.',
        Style: 'STYLE1',
        FormID: 'INSTALLMENT_STEP',
        SubID: '',
        SubID2: '',
        SubID3: '',
        Domain: '',
        Height: 'AUTO',
        StepAmountSelect: 'buttons'
      }

      // Create and append the init script
      const initScript = document.createElement('script')
      initScript.type = 'text/javascript'
      initScript.src = `${srcURL}/init.php?vn=${encodeURIComponent(JSON.stringify(inputOptions))}`
      document.head.appendChild(initScript)
    }

    // Cleanup function
    return () => {
      // Remove scripts when component unmounts
      const scripts = document.querySelectorAll('script[src*="rndframe.com"]')
      scripts.forEach(script => script.remove())
    }
  }, [])

  return <div id="rsForm" className="my-8"></div>
}