import { Card } from "@/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <div>Notification</div>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
