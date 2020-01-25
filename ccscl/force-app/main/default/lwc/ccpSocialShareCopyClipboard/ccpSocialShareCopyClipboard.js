import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CcpSocialShareCopyClipboard extends LightningElement {

    @api linkOutputValue = window.location.href;

    renderedCallback()
    {
        this.copyToClipboard();
    }

    copyToClipboard() {
        /* Get the text field */
        var copyText = this.template.querySelector('.calculatedSocialLinkOutput');
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        //alert("Copied the text: " + copyText.value);
        const evt = new ShowToastEvent({
            title: 'Link copied',
            message: 'Link has been successfully copied to clipboard!',
            variant: 'success',
        });
        this.dispatchEvent(evt);
      }

}