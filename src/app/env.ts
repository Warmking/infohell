const env = {
    appwrite : {
        endpointUrl : String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT_URL),
        projectId : String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
        apiKey : String(process.env.APPWRITE_API_KEY),
    }
}

export default env;