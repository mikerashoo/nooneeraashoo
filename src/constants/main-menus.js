import React from 'react'
import {CrownFilled, DribbbleCircleFilled, FilterFilled, FlagFilled, MessageFilled, ReadFilled, ScheduleFilled, TranslationOutlined, WechatFilled} from '@ant-design/icons'
export const menus = [
    {
        name: 'Dikishiineeri',
        amharic: 'መዝገበ-ቃላት',
        english: 'Dictionary',
        icon: <TranslationOutlined />,
        link: '/dictionary'
    }, 
    {
        name: 'Tochoo',
        amharic: 'ተረት-ተረት',
        english: 'Story',
        icon: <MessageFilled />,
        link: '/'
    }, 
    {
        name: 'Doyoo',
        amharic: 'ከፍኖኖ ትምህርት',
        english: 'Kafinoonoo education',
        icon: <ReadFilled />,
        link: '/'
    }, 
    {
        name: "Shuunee miheena'o",
        amharic: 'የሥራ ቃላት',
        english: 'Office words',
        icon: <FlagFilled />,
        link: '/'
    }, 
    {
        name: 'Kaffi',
        amharic: 'ስለ ከፋ',
        english: 'About kafa',
        icon: <CrownFilled />,
        link: '/'
    }, 
    {
        name: "Turiteena'o",
        amharic: 'እንቆቅልሽ',
        english: 'Riddles',
        icon: <WechatFilled />,
        link: '/'
    }, 
    {
        name: "Shaahiyee Yibaatena'o",
        amharic: 'ምሳሌያዊ አነጋገር',
        english: 'Proverbs',
        icon: <FilterFilled />,
        link: '/'
    }, 
    {
        name: "Turiste xaa'eena'o",
        amharic: 'የቱርዝም ቦታዎች',
        english: 'Tourist sites',
        icon: <DribbbleCircleFilled />,
        link: '/'
    }, 
]