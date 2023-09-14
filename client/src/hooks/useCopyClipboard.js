import {useToggle} from "./useToggle"

export const useCopyClipboard = (selector, timer) => {

    const [isCopy, toggleCopy]= useToggle(false)
    
    const copyToClipboard = () => {

        let copyText = document.querySelector(selector);
        const selection = window.getSelection();
        const range = document.createRange();

            if (copyText) {
                range.selectNode(copyText);
            }
            
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
            }
            
            try {
              document.execCommand("copy");
         
              toggleCopy(true)
              console.log("Success");
              selection.removeAllRanges();
              setTimeout(() => {
                        toggleCopy(false)
                    }, timer)
            } catch (exception) {
                console.log("Fail");
                toggleCopy(false)
            }
    };

    return [isCopy, copyToClipboard]
}
