import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

  const queryClient = new QueryClient()
 
 function ReactQueryApi() {
   return (
     // Provide the client to your App
     <QueryClientProvider client={queryClient}>
    
     </QueryClientProvider>
   )
 }

 export default ReactQueryApi;