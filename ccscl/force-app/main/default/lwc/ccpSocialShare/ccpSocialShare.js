/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { LightningElement, api, track } from 'lwc';
import SOCIALICONS_URL from '@salesforce/resourceUrl/Social_Icons';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FORM_FACTOR from '@salesforce/client/formFactor';

const urlMap = new Map([
                ['facebook', 'https://www.facebook.com/sharer.php?u=[post-url]'],
                ['linkedin', 'https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]'],
                ['pinterest','https://pinterest.com/pin/create/bookmarklet/?url=[post-url]&description=[post-title]'],
                ['twitter','https://twitter.com/share?url=[post-url]&text=[post-title]'],
                ['whatsapp','https://wa.me/?text=[post-url] [post-title]'],
                ['email', 'mailto:?subject=Check out this link: [post-title]&body=Check out this link: [post-title] - [post-url]'],
                ['link','[post-url]'],
                ['reddit','http://www.reddit.com/submit?url=[post-url]&title=[post-title]'],
                ['vkontakte','https://vk.com/share.php?url=[post-url]&title=[post-title]'],
                ['stumbleupon','http://www.stumbleupon.com/submit?url=[post-url]&title=[post-title]'],
                ['telegram','tg://msg?text=[post-url] [post-title]'],
                ['line','http://line.me/R/msg/text/?[post-url] [post-title]'],
                ['viber','viber://forward?text=[post-url] [post-title]'],
                ['pocket','https://getpocket.com/save?url=[post-url]&title=[post-title]'],
                ['fbmessenger','fb-messenger://share?link=[post-url]'],
                ['tumblr','http://www.tumblr.com/share?v=3&u=[post-url]&t=[post-title]']
                ]);
    
    const KEY_ENTER = 13;
    const KEY_SPACE = 32;
    
export default class ccpSocialShare extends LightningElement {
    @api iconType = 'circle';
    @api alignment = 'center';
    @api titleAlignment = 'left';
    @api iconWidth = 32;
    @api iconMargin = 2;
    @api socialServices = new Array();
    @api socialServicesMap = new Map();
    @api title = 'Social Share: ';
    @api openModal = false;
    @api linkOutputValue = document.URL;
    @api leftMargin = '0';
    @api rightMargin = '0';
    @api titleStyle = '';
    @api autoHide = false;
    @api socialShareIconLinkStyle = 'margin-bottom: 20px;';
    @api topLevelDivStyle = '';
    @api socialShareTextCollapsed = '[+]';
    @api socialShareTextExpanded = '[-]';

    @api hideFacebook = 'None';
    @api hideLinkedin = 'None';
    @api hidePinterest = 'None';
    @api hideTwitter = 'None';
    @api hideWhatsapp = 'None';
    @api hideEmail = 'None';
    @api hideLink = 'None';
    @api hideReddit = 'None';
    @api hideVkontakte = 'None';
    @api hideStumbleupon = 'None';
    @api hideTelegram = 'None';
    @api hideLine = 'None';
    @api hideViber = 'None';
    @api hidePocket = 'None';
    @api hideFbmessenger = 'None';
    @api hideTumblr = 'None';
    

    @api socialShareIconImageOverride;
    @api imageOverrideFacebook;
    @api imageOverrideLinkedin;
    @api imageOverridePinterest;
    @api imageOverrideTwitter;
    @api imageOverrideWhatsapp;
    @api imageOverrideEmail;
    @api imageOverrideLink;
    @api imageOverrideReddit;
    @api imageOverrideVkontakte;
    @api imageOverrideStumbleupon;
    @api imageOverrideTelegram;
    @api imageOverrideLine;
    @api imageOverrideViber;
    @api imageOverridePocket;
    @api imageOverrideFbmessenger;
    @api imageOverrideTumblr;

    @api order = 'facebook,linkedin,pinterest,twitter,whatsapp,email,link,reddit,vkontakte,stumbleupon,telegram,line,viber,pocket,fbmessenger,tumblr';
    
    @track socialShareText = '';
    @track socialShareAssistiveText = '';

    @api
    get titleClasses()
    {
        return 'title text-align_' + this.titleAlignment; 
    }

    @api
    get containerStyle() 
    {
        let calculatedWidth = ((this.iconWidth + (2 * this.iconMargin)) * urlMap.size) - (2 * this.iconMargin);
        return (this.alignment === 'center' || this.alignment === 'left' || this.alignment === 'right') ? 'width: ' + calculatedWidth + 'px;' : '';
    }

    @api
    get topLevelClass()
    {
        return (this.alignment === 'center' || this.alignment === 'left' || this.alignment === 'right') ? 'normal' : 'fixed ' + this.alignment;
    }

    @api
    get topLevelStyle()
    {
        return 'margin-left: ' + this.leftMargin + '; margin-right: ' + this.rightMargin + '; ' + this.topLevelDivStyle;
    }

    @api
    get alignmentValue()
    {
        return (this.alignment === 'center' || this.alignment === 'left' || this.alignment === 'right') ? this.alignment : ''; 
    }

    @api
    get imgStyle()
    {
        return (this.alignment === 'center' || this.alignment === 'left' || this.alignment === 'right') ? 'margin-left: ' + this.iconMargin + 'px; margin-right: ' + this.iconMargin + 'px;' : 'margin-top: ' + this.iconMargin + 'px; margin-bottom: ' + this.iconMargin + 'px;';
    }

    @api 
    get isFixed()
    {
        return (this.alignment === 'fixed-left' || this.alignment === 'fixed-right');
    }

    @api 
    get isFixedLeft()
    {
        return this.alignment === 'fixed-left';
    }

    @api 
    get isFixedRight()
    {
        return this.alignment === 'fixed-right';
    }

    @api
    get socialShareImgUrl()
    {
        return (this.socialShareIconImageOverride !== undefined && this.socialShareIconImageOverride.trim() !== '') ? this.socialShareIconImageOverride : SOCIALICONS_URL + '/' + this.iconType + '/socialshare.png';
    }

    @api
    get isAutoHideAndFixed()
    {
        return this.isFixed && this.autoHide;
    }

    connectedCallback()
    {

        try {
            this.order = (this.order !== undefined && this.order.trim() !== '') ? this.order.trim().toLowerCase() : '' ;
            let orderList = this.order.split(',');
            for(let i=0;i<orderList.length;i++)
            {
                let name = (orderList[i] !== undefined && orderList[i].trim() !== '') ? orderList[i].trim() : undefined;
                if(urlMap.get(name) !== undefined)
                {
                    this.buildSS(name); 
                }     
            }
        } catch(err){}

        for (const k of urlMap.keys())
        {
            this.buildSS(k);
        }

        if(this.socialShareTextCollapsed !== undefined && this.socialShareTextCollapsed !== null && this.socialShareTextCollapsed.trim() !== '')
        {
            this.socialShareText = this.socialShareTextCollapsed;
        }

        this.socialShareAssistiveText = 'Social Share Collapsed';

    }

    buildSS(name)
    {
        if(this.socialServicesMap.get(name) === undefined)
        {
            let ss = {};
            ss.name = name;
            ss.url = urlMap.get(name);
            ss.hide = this.calculateHide(this['hide' + this.capitalize(name)]);
            ss.image = (this['imageOverride' + this.capitalize(name)] !== undefined && this['imageOverride' + this.capitalize(name)].trim() !== '') ? this['imageOverride' + this.capitalize(name)] : SOCIALICONS_URL + '/' + this.iconType + '/' + name +'.png';
            ss.classes = 'socialShareLink';
            ss.classes += (this.isAutoHideAndFixed) ? ' slds-hide' : '' ;
            this.socialServices.push(ss);
            this.socialServicesMap.set(name, ss);
        }
    }

    calculateHide(value)
    {
        switch (FORM_FACTOR) {
            case 'Small': 
                return (value === 'All' || value === 'Mobile and Tablet' 
                        || value === 'Mobile' || value === 'Mobile and Desktop');
            case 'Medium':
                return (value === 'All' || value === 'Mobile and Tablet' 
                        || value === 'Tablet' || value === 'Tablet and Desktop');
            default:
                return (value === 'All' || value === 'Tablet and Desktop' 
                        || value === 'Desktop' || value === 'Mobile and Desktop');
        }
    }

    capitalize(value)
    {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    handleSocialIconKeyPress(e)
    {
        switch (e.which) {
            case KEY_ENTER:
            case KEY_SPACE: {
                this.handleSocialIconClick(e);
                break;
            }
        }
    }

    handleSocialIconClick(e)
    {
        let currUrlTmp = document.URL;
        
        let name = e.currentTarget.dataset.name;
        let currUrl = (name != 'link') ? encodeURIComponent(currUrlTmp) : currUrlTmp;
        let currTitle = (name != 'link') ? encodeURIComponent(document.title) : document.title;
        let socialUrl = urlMap.get(name);
        socialUrl = socialUrl.replace(/\[post-url\]/gi, currUrl);
        socialUrl = socialUrl.replace(/\[post-title\]/gi, currTitle);
        let linkElement = this.template.querySelector('.calculatedSocialLink');
        linkElement.href = socialUrl;
        this.linkOutputValue = currUrl;

        if(name === 'link')
        {
            this.doOpenModal();
        }
        else
        {
            linkElement.click();
        }

    }

    doOpenModal() 
    {
        this.openModal = true
    }
    doCloseModal() 
    {
        this.openModal = false
    } 

    handleKeyPress(e)
    {
        switch (e.which) {
            case KEY_ENTER:
            case KEY_SPACE: {
                this.handleSocialShareClick(e);
                break;
            }
        }
    }

    handleSocialShareClick(e)
    {
        e.preventDefault();
        let socialLinks = this.template.querySelectorAll('.socialShareLink');
        socialLinks.forEach(function(socialLink)
        {
            if(socialLink.classList.contains('slds-hide'))
            {
                socialLink.classList.remove('slds-hide');
            }
            else
            {
                socialLink.classList.add('slds-hide');
            }
        });

        if(this.socialShareTextCollapsed !== undefined && this.socialShareTextCollapsed.trim() !== ''
            && this.socialShareTextExpanded !== undefined && this.socialShareTextExpanded.trim() !== '')
        {
            if(this.socialShareText === this.socialShareTextCollapsed)
            {
                this.socialShareText = this.socialShareTextExpanded;
                this.socialShareAssistiveText = 'Social Share Expanded';
            }
            else
            {   
                this.socialShareText = this.socialShareTextCollapsed;
                this.socialShareAssistiveText = 'Social Share Collapsed';
            }
        }

    }

}