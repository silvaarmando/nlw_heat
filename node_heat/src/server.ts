import {
  serverHttp
} from "./app";

serverHttp.listen(4100,
  () => console.log('🚀 Server is running on PORT 4100!')
)

