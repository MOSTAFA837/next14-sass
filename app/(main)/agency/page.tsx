import { getAuthUserData, verifyAndAcceptInvitation } from "@/lib/queries";

export default async function page() {
  const agancyId = await verifyAndAcceptInvitation();
  console.log(agancyId);

  // get user details
  const user = await getAuthUserData();

  return <div>page</div>;
}
