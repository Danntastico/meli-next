import getItemById from "@/lib/api/getItemById"

export default async function Items() {
  const data = await getItemById()
  return <div></div>
}
