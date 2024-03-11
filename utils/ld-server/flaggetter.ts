
const context = {
    "kind": 'user',
    "key": 'user-key-123abc',
    "name": 'Sandy'
 };

const serverflag =  async (ldclient: any, key: string, defaultvalue: any) => {
 const flag = await ldclient.variation(key, context, defaultvalue)
 return flag
}

export default serverflag