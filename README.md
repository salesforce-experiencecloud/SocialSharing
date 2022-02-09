# Social Sharing for Experience Cloud

**As of:** Spring '21

**Authored By:** George Abboud

**Last Updated:** 05/13/2021

* * *


# Overview:

![image](https://user-images.githubusercontent.com/8514282/153286663-27a37373-484b-465d-893d-338d2bdc962f.png)

AppExchange Listing: 
https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FYjsFUAT

Open-Source Code:
https://github.com/salesforce-experiencecloud/SocialSharing


## Description:

Social Sharing for your community pages! Circle/Square social icons, various layout options, and works in any region in your community!



### Disclaimer:

This package is free to use, but is not an official [salesforce.com](http://salesforce.com/) product, and should be considered a community project. The functionality is not officially tested or documented, and does not come with any support, warrantees, or updates. It is offered as-is.


## Screenshots

![image](https://user-images.githubusercontent.com/8514282/153286731-3b730b34-d983-492d-af08-eba803aa93ea.png)
![image](https://user-images.githubusercontent.com/8514282/153286793-f1340222-87d1-4585-be8e-1e7076fbad25.png)
![image](https://user-images.githubusercontent.com/8514282/153286831-1327bab2-89e6-4034-9713-acf61121b547.png)
![image](https://user-images.githubusercontent.com/8514282/153286882-6aa582d3-6c54-487c-b25a-21980f470799.png)


## Configuration and Usage:

**Component Label**: Social Share

**Component Aura API Name**: ccpSocialShare

**Component LWC API Name**: ccp-social-share

**Component Namespace**: ccscl

**Component Properties:**

|Property Label	|Aura Property API Name	|LWC Property API Name	|Type	|Description	|
|---	|---	|---	|---	|---	|
|Alignment	|alignment	|alignment	|String	|<p>Set the alignment of the social share component. Options are:
- fixed-right: absolute positioning to the right of the page
- fixed-left: absolute positioning to the left of the page
- right: within the container it is placed in, aligned to the right
- left: within the container it is placed in, aligned to the left
- center: within the container it is placed in, centered</p>	|
|Auto Hide Icons When Fixed	|autoHide	|auto-hide	|Boolean	|When checked and if the Alignment is fixed-right or fixed-left, the social share icons are automatically hidden and only show when the user clicks on the image to expand the icons. When unchecked, the social icons are visible all the time.	|
|Auto Hide Social Share Icon Text - Collapsed	|socialShareTextCollapsed	|social-share-text-collapsed	|String	|Text value to show next to the auto hide icon when social icons are collapsed	|
|Auto Hide Social Share Icon Text - Expanded	|socialShareTextExpanded	|social-share-text-expanded	|String	|Text value to show next to the auto hide icon when social icons are expanded	|
|Auto Hide Social Share Icon Link Style	|socialShareIconLinkStyle	|social-share-icon-link-style	|String	|CSS Style for the link wrapping the Social Share Icon	|
|Override Image Url for Auto Hide Social Share Icon	|socialShareIconImageOverride	|social-share-icon-image-override	|String	|Override Image Url for Auto Hide Social Share Icon. Square dimensions, example: 120px X 120px	|
|Left Margin	|leftMargin	|left-margin	|String	|left margin value of the component	|
|Right Margin	|rightMargin	|right-margin	|String	|right margin value of the component	|
|Top Level Div Style	|topLevelDivStyle	|top-level-div-style	|String	|CSS Style for the top level Div wrapping the entire component	|
|Title	|title	|title	|String	|Title - will not display in 'fixed' Alignment	|
|Title Alignment	|titleAlignment	|title-alignment	|String	|Alignment of the title when not in fixed alignment mode. Options are:
- left
- right
- center	|
|Title Style	|titleStyle	|title-style	|String	|CSS Style of the title	|
|Width of Social Icon	|iconWidth	|icon-width	|Integer	|Width of the social icon images	|
|Social Icon Margins	|iconMargin	|icon-margin	|Integer	|Margin in pixels between each of the Social Icons	|
|Social Icon Type	|iconType	|icon-type	|String	|Type of social icon to render. Options are:
- circle
- square	|
|Hide Facebook	|hideFacebook	|hide-facebook	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Linkedin	|hideLinkedin	|hide-linkedin	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Pinterest	|hidePinterest	|hide-pinterest	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Twitter	|hideTwitter	|hide-twitter	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Whatsapp	|hideWhatsapp	|hide-whatsapp	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Email	|hideEmail	|hide-email	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Link	|hideLink	|hide-link	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Reddit	|hideReddit	|hide-reddit	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Vkontakte	|hideVkontakte	|hide-vkontakte	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Stumbleupon	|hideStumbleupon	|hide-stumbleupon	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Telegram	|hideTelegram	|hide-telegram	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Line	|hideLine	|hide-line	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Viber	|hideViber	|hide-viber	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Pocket	|hidePocket	|hide-pocket	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Hide Facebook Messenger	|hideFbmessenger	|hide-fbmessenger	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|	|hideTumblr	|hide-tumblr	|String	|Hide social channel on certain form factors. Options are:
- None - show on all form factors
- Mobile - hide on mobile form factor
- Tablet - hide on tablet form factor
- Desktop - hide on desktop form factor
- Mobile and Tablet - hide on mobile and tablet form factors
- Mobile and Desktop - hide on mobile and desktop form factors
- Tablet and Desktop - hide on tablet and desktop form factors
- All - hide on all form factors	|
|Order	|order	|order	|String	|Comma separated list of social services names in order. Example: facebook,linkedin,pinterest,twitter,whatsapp,email,link,vkontakte,stumbleupon,telegram,line,viber,pocket,fbmessenger,tumblr	|
|Override Image Url for Facebook	|imageOverrideFacebook	|image-override-facebook	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Linkedin	|imageOverrideLinkedin	|image-override-linkedin	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Pinterest	|imageOverridePinterest	|image-override-pinterest	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Twitter	|imageOverrideTwitter	|image-override-twitter	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Whatsapp	|imageOverrideWhatsapp	|image-override-whatsapp	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Email	|imageOverrideEmail	|image-override-email	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Link	|imageOverrideLink	|image-override-link	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Reddit	|imageOverrideReddit	|image-override-reddit	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Vkontakte	|imageOverrideVkontakte	|image-override-vkontakte	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Stumbleupon	|imageOverrideStumbleupon	|image-override-stumbleupon	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Telegram	|imageOverrideTelegram	|image-override-telegram	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Line	|imageOverrideLine	|image-override-line	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Viber	|imageOverrideViber	|image-override-viber	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Pocket	|imageOverridePocket	|image-override-pocket	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Facebook Messenger	|imageOverrideFbmessenger	|image-override-fbmessenger	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|
|Override Image Url for Tumblr	|imageOverrideTumblr	|image-override-tumblr	|String	|Override Image Url for Social Channel. Square dimensions, example: 120px X 120px	|



# Features

1. Ordering of social channels
2. Overriding images per social channel
3. Showing/Hiding social channels
4. Various presentation / styling options
5. LWR Ready




## Release Log:

### Version 1.4

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000008jhiu 

* LWR Ready
* Accessibility Fixes



### Version 1.3 (DEPRECATED)

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000008OMv3 

* Locker Service Fixes



### Version 1.2 (DEPRECATED)

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000008OLFo 

* Auto Hide when fixed with collapse / expand functionality 
* Image override for auto hide icon 
* Text collapsed / expanded 
* Top Level Div Style option



### Version 1.1 (DEPRECATED)

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000003prAs 

* Option to hide certain social sharing channels on various form factors
* Option to control order of social sharing channels
* Option to override images for social channels
* Added more social sharing channels



### Version 1.0 (DEPRECATED)

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000003prAn 

* Initial Release
* Choose between Circle and Square social icons!
* Various layout options, relative left/right/centered vs vertical fixed/floating right or left!
* Place in any region of your community (including shared header/footer regions)!
* Social Sharing for your community pages! Circle/Square social icons, various layout options, and works in any region in your community!

