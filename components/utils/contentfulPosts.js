const space = process.env.ATC_CONTENTFUL_SPACE_ID
const accessToken = process.env.ATC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken
});

export async function fetchEntries(){
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting entries for ${contentType.name}.`)
}

export default { fetchEntries }