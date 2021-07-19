import React from 'react'
import sendAsync from '../message-control/renderer';

    export const fetchWordsApi = async (sql) => { 
        const call = await sendAsync(sql);   
  return await call;
    }
 