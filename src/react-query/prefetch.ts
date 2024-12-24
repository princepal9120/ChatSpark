import { getAllAutomations, getAutomationInfo } from '@/actions/automations'
import { onUserInfo } from '@/actions/user'
import { client } from '@/lib/prisma'
import { QueryClient, QueryFunction } from '@tanstack/react-query'

const prefetch = async (
  client: QueryClient,
  action: QueryFunction,
  key: string
) => {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 60000,
  })
}
export const PrefetchUserProfile = async()=>{

    return await prefetch(client, onUserInfo, 'user-profile');
}