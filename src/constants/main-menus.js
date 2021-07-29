import React from 'react'
import {CrownFilled, DribbbleCircleFilled, FilterFilled, FlagFilled, MessageFilled, ReadFilled, ScheduleFilled, TranslationOutlined, WechatFilled, WindowsOutlined} from '@ant-design/icons'
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
        link: '/tochoo'
    }, 
    {
        name: "Turiteena'o",
        amharic: 'እንቆቅልሽ',
        english: 'Riddles',
        icon: <WechatFilled />,
        link: '/turito'
    }, 
    {
        name: "Shaahiyee Yibaatena'o",
        amharic: 'ምሳሌያዊ አነጋገር',
        english: 'Proverbs',
        icon: <FilterFilled />,
        link: '/shaahiyoo'
    }, 
    {
        name: 'Doyoo',
        amharic: 'ከፍኖኖ ትምህርት',
        english: 'Kafinoonoo education',
        icon: <ReadFilled />,
        link: '/education'
    }, 
    {
        name: "Ariyaa Bedeena'o",
        amharic: 'ማወቅ ያሉበን',
        english: 'Things to know',
        icon: <WindowsOutlined />,
        link: '/general'
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
   
]