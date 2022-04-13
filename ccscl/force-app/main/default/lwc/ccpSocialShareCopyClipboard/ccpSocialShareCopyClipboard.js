/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CcpSocialShareCopyClipboard extends LightningElement {

    @api linkOutputValue = document.URL;

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