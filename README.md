# CMGT Assistent

Deze frontend client roept de CMGT assistent serverless api op vercel aan. 

https://kokodoko.github.io/cmgt-assistent/

## Serverless Call

Vercel serverless function van extern domein aanroepen. [Je moet CORS aanzetten in vercel](https://vercel.com/guides/how-to-enable-cors).

### Test

https://serverless-ai-api.vercel.app/api/hello


```json
{"message":"Hello World!"}
```

### OpenAI

https://serverless-ai-api.vercel.app/api/ask?topic=hamsters


```json
{"message":"Did you know hamsters..."}
```





