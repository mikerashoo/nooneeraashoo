import React from 'react'
import sendAsync from '../message-control/renderer';

export const fetchWordsApi = async (sql) => { 
	const call = await sendAsync(sql);   
	return await call;
}

export const runFetchApi = async (sql) => { 
	const call = await sendAsync(sql);   
	return await call;
}

export const runDatesApi = async (sql) => { 
	const call = await sendAsync(sql);   
	console.log("sql on api ", sql);
	console.log("call on api ", call);
	return await call;
}
