import { LightningElement, api } from 'lwc';
import SOCIALICONS_URL from '@salesforce/resourceUrl/Social_Icons';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const urlMap = new Map([
                ['facebook', 'https://www.facebook.com/sharer.php?u=[post-url]'],
                ['linkedin', 'https://www.linkedin.com/shareArticle?url=[post-url]'],
                ['pinterest','https://pinterest.com/pin/create/bookmarklet/?url=[post-url]'],
                ['twitter','https://twitter.com/share?url=[post-url]'],
                ['whatsapp','https://wa.me/?text=[post-url]'],
                ['email', 'mailto:?subject=Check out this link&body=Check out this link: [post-url]'],
                ['link','[post-url]']
                ]);

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
    @api linkOutputValue = window.location.href;
    @api leftMargin = '0';
    @api rightMargin = '0';
    @api titleStyle = '';


    
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
        return 'margin-left: ' + this.leftMargin + '; margin-right: ' + this.rightMargin + ';';
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

    connectedCallback()
    {
        for (const k of urlMap.keys())
        {
            this.buildSS(k);
        }

    }

    buildSS(name)
    {
        let ss = {};
        ss.name = name;
        ss.url = urlMap.get(name);
        ss.image = SOCIALICONS_URL + '/' + this.iconType + '/' + name +'.png';
        this.socialServices.push(ss);
        this.socialServicesMap.set(name, ss);
    }

    handleSocialIconClick(e)
    {
        
        let name = e.currentTarget.dataset.name;
        let currUrl = window.location.href;
        let socialUrl = urlMap.get(name);
        socialUrl = socialUrl.replace(/\[post-url\]/gi, currUrl);
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

}